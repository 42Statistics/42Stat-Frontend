import { padWithNullValues } from '@/Profile/utils/padWithNullValues';
import { useQuery } from '@apollo/client';
import { useTheme } from '@emotion/react';
import { gql } from '@shared/__generated__';
import { userAtom } from '@shared/atoms/userAtom';
import { LineChart } from '@shared/components/Chart';
import { DashboardContent } from '@shared/components/DashboardContent';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@shared/components/DashboardContentView/Error';
import { BREAKPOINT } from '@shared/constants/BREAKPOINT';
import { useAtomValue } from 'jotai';
import { useParams } from 'react-router-dom';

const GET_LEVEL_RECORDS_VERSUS = gql(/* GraphQL */ `
  query GetLevelRecordsVersus($login1: String!, $login2: String!) {
    data1: getPersonalGeneral(login: $login1) {
      userLevelRecords {
        monthsPassed
        level
      }
    }
    data2: getPersonalGeneral(login: $login2) {
      userLevelRecords {
        monthsPassed
        level
      }
    }
  }
`);

export const LevelRecords = () => {
  const { login } = useParams() as { login: string };
  const user = useAtomValue(userAtom);

  const title = '레벨 증가 그래프';
  const description = '본과정 시작일로부터 최대 24개월';
  const { loading, error, data } = useQuery(GET_LEVEL_RECORDS_VERSUS, {
    variables: { login1: login, login2: user.login },
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

  const {
    data1: { userLevelRecords: levelRecords },
    data2: { userLevelRecords: myLevelRecords },
  } = data;

  const levelSeries = padWithNullValues(
    levelRecords.map(({ monthsPassed, level }) => ({
      x: monthsPassed,
      y: level,
    })),
    25,
  );
  const myLevelSeries = padWithNullValues(
    myLevelRecords.map(({ monthsPassed, level }) => ({
      x: monthsPassed,
      y: level,
    })),
    25,
  );

  const series = [
    {
      name: login,
      data: levelSeries,
    },
    {
      name: user.login,
      data: myLevelSeries,
    },
  ];

  return (
    <DashboardContent title={title} description={description} isApexChart>
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
    colors: [theme.colors.primary.default, theme.colors.accent.default],
    xaxis: {
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
