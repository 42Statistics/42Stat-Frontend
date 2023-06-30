import { gql } from '@/__generated__';
import { useQuery } from '@apollo/client';
import { LineChart } from '@components/elements/Chart';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@components/elements/DashboardContentView/Error';
import { DashboardContent } from '@components/templates/DashboardContent';
import { useTheme } from '@emotion/react';
import { isDefined } from '@utils/isDefined';
import { useParams } from 'react-router-dom';

const GET_LEVEL_RECORDS_BY_LOGIN = gql(/* GraphQL */ `
  query GetLevelRecordsByLogin($login: String!) {
    getPersonalGeneral(login: $login) {
      userLevelRecords {
        monthsPassed
        level
      }
      memberLevelRecords {
        monthsPassed
        level
      }
    }
  }
`);

export const LevelRecords = () => {
  const { username } = useParams() as { username: string };

  const title = '레벨 증가 그래프';
  const description = `멤버 평균과 비교`;
  const { loading, error, data } = useQuery(GET_LEVEL_RECORDS_BY_LOGIN, {
    variables: { login: username },
  });
  if (loading) return <DashboardContentLoading />;
  if (error) return <DashboardContentBadRequest message={error.message} />;
  if (!data) return <DashboardContentNotFound />;

  const { userLevelRecords, memberLevelRecords } = data.getPersonalGeneral;

  const userLevelSeries = userLevelRecords
    .filter(isDefined)
    .map(({ monthsPassed, level }) => ({
      x: monthsPassed,
      y: level,
    }));
  const memberLevelSeries = memberLevelRecords.map(
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
      name: '멤버 평균',
      data: memberLevelSeries,
    },
  ];

  return (
    <DashboardContent title={title} description={description}>
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
    colors: [theme.colors.primary.default, theme.colors.accent.default],
    xaxis: {
      tickAmount: 8,
      labels: {
        formatter: (value) => `${value}개월`,
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
