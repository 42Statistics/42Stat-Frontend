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
import { useParams } from 'react-router-dom';

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
  const { username } = useParams() as { username: string };

  const title = '레벨 증가 그래프';
  const description = `본과정 시작일로부터 최대 24개월`;
  const { loading, error, data } = useQuery(GET_LEVEL_RECORDS_BY_LOGIN, {
    variables: { login: username },
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

  const userLevelSeries = userLevelRecords.map(({ monthsPassed, level }) => ({
    x: monthsPassed,
    y: level,
  }));
  const promoLevelSeries = promoLevelRecords.map(({ monthsPassed, level }) => ({
    x: monthsPassed,
    y: level,
  }));
  const promoMemberLevelSeries = promoMemberLevelRecords.map(
    ({ monthsPassed, level }) => ({
      x: monthsPassed,
      y: level,
    }),
  );

  const series = [
    {
      name: username,
      data: userLevelSeries,
    },
    {
      name: '동일 기수 평균',
      data: promoLevelSeries,
    },
    {
      name: '동일 기수 중 멤버 평균',
      data: promoMemberLevelSeries,
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

  const options: ApexCharts.ApexOptions = {
    colors: [
      theme.colors.primary.default,
      theme.colors.mono.gray300,
      theme.colors.accent.default,
    ],
    xaxis: {
      labels: {
        formatter: (value) => `${value}`,
      },
    },
    yaxis: {
      labels: {
        formatter: (value) => `lv. ${value}`,
      },
    },
    tooltip: {
      x: {
        formatter: (value) => `${value}개월 차`,
      },
    },
  };

  return <LineChart series={series} options={options} />;
};
