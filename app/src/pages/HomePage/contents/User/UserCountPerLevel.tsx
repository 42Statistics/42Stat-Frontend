import { gql } from '@/__generated__';
import { useQuery } from '@apollo/client';
import { BarChart } from '@components/elements/Chart';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@components/elements/DashboardContentView/Error';
import { DashboardContent } from '@components/templates/DashboardContent';
import { numberWithUnitFormatter } from '@utils/formatters';

const GET_USER_COUNT_PER_LEVEL = gql(/* GraphQL */ `
  query GetUserCountPerLevel {
    getHomeUser {
      userCountPerLevel {
        value
        level
      }
    }
  }
`);

export const UserCountPerLevel = () => {
  const title = '여행 중인 유저 레벨 분포';
  const { loading, error, data } = useQuery(GET_USER_COUNT_PER_LEVEL);
  if (loading) return <DashboardContentLoading />;
  if (error) return <DashboardContentBadRequest message={error.message} />;
  if (!data) return <DashboardContentNotFound />;

  const { userCountPerLevel } = data.getHomeUser;

  const categories = userCountPerLevel.map(({ level }) => level);
  const seriesData = userCountPerLevel.map(({ value }) => value);

  const series: ApexAxisChartSeries = [
    {
      name: '인원수',
      data: seriesData,
    },
  ];

  return (
    <DashboardContent title={title} isApexChart>
      <UserCountPerLevelChart categories={categories} series={series} />
    </DashboardContent>
  );
};

type UserCountPerLevelChartProps = {
  categories: number[];
  series: ApexAxisChartSeries;
};

const UserCountPerLevelChart = ({
  categories,
  series,
}: UserCountPerLevelChartProps) => {
  const options: ApexCharts.ApexOptions = {
    xaxis: {
      categories,
      labels: {
        formatter: (value) => value,
      },
    },
    yaxis: {
      labels: {
        formatter: (value) => numberWithUnitFormatter(value, '명'),
      },
    },
    tooltip: {
      x: {
        formatter: (value) => `Level ${value}`,
      },
    },
  };

  return <BarChart options={options} series={series} />;
};
