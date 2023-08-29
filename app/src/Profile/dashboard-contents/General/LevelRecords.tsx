import { UserProfileContext } from '@/Profile/contexts/UserProfileContext';
import { padWithNullValues } from '@/Profile/utils/padWithNullValues';
import { useQuery } from '@apollo/client';
import { useTheme } from '@emotion/react';
import { gql } from '@shared/__generated__';
import { LineChart } from '@shared/components/Chart';
import { DashboardContent } from '@shared/components/DashboardContent';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@shared/components/DashboardContentView/Error';
import { BREAKPOINT } from '@shared/constants/responsive';
import { useContext } from 'react';

const GET_LEVEL_RECORDS_BY_LOGIN = gql(/* GraphQL */ `
  query GetLevelRecordsByLogin($login: String!) {
    getPersonalGeneral(login: $login) {
      userLevelRecords {
        monthsPassed
        level
      }
      promoLevelRecords {
        monthsPassed
        level
      }
      promoMemberLevelRecords {
        monthsPassed
        level
      }
    }
  }
`);

export const LevelRecords = () => {
  const { login } = useContext(UserProfileContext);

  const title = '레벨 증가 그래프';
  const description = `본과정 시작일로부터 최대 24개월`;
  const { loading, error, data } = useQuery(GET_LEVEL_RECORDS_BY_LOGIN, {
    variables: { login },
  });

  if (loading) {
    return <DashboardContentLoading title={title} description={description} />;
  }
  if (error) {
    return (
      <DashboardContentBadRequest
        title={title}
        description={description}
        message={error.message}
      />
    );
  }
  if (!data) {
    return <DashboardContentNotFound title={title} description={description} />;
  }

  const { userLevelRecords, promoLevelRecords, promoMemberLevelRecords } =
    data.getPersonalGeneral;

  const userLevelSeries = padWithNullValues(
    userLevelRecords.map(({ monthsPassed, level }) => ({
      x: monthsPassed,
      y: level,
    })),
    25,
  );
  const promoLevelSeries = padWithNullValues(
    promoLevelRecords.map(({ monthsPassed, level }) => ({
      x: monthsPassed,
      y: level,
    })),
    25,
  );
  const promoMemberLevelSeries = padWithNullValues(
    promoMemberLevelRecords.map(({ monthsPassed, level }) => ({
      x: monthsPassed,
      y: level,
    })),
    25,
  );

  const series = [
    {
      name: login,
      data: userLevelSeries,
    },
    {
      name: '동일 기수 평균',
      data: promoLevelSeries,
    },
    {
      name: '동일 기수 멤버 평균',
      data: promoMemberLevelSeries,
    },
  ];

  return (
    <DashboardContent title={title} description={description} type="ApexCharts">
      <LevelRecordsChart series={series} />
    </DashboardContent>
  );
};

type LevelRecordsChartProps = {
  series: ApexAxisChartSeries;
};

const LevelRecordsChart = ({ series }: LevelRecordsChartProps) => {
  const theme = useTheme();

  const mobileOptions: ApexCharts.ApexOptions = {
    xaxis: {
      tickAmount: 4,
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
  };

  const options: ApexCharts.ApexOptions = {
    colors: [
      theme.colors.chart.primary.default,
      theme.colors.mono.gray500,
      theme.colors.chart.accent.default,
    ],
    xaxis: {
      type: 'numeric',
      min: 0,
      max: 24,
      tickAmount: 8,
      labels: {
        formatter: (value) => `${value}개월`,
      },
    },
    yaxis: {
      labels: {
        formatter: (value) => value.toFixed(0),
      },
    },
    tooltip: {
      x: {
        formatter: (value) => `${value}개월 차`,
      },
      y: {
        formatter: (value) => (value === null ? '-' : value.toFixed(2)),
      },
    },
    responsive: [
      {
        breakpoint: BREAKPOINT.MOBILE,
        options: mobileOptions,
      },
    ],
  };

  return <LineChart series={series} options={options} />;
};
