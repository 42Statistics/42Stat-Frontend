import { useQuery } from '@apollo/client';
import { gql } from '@shared/__generated__';
import { BarChart } from '@shared/components/Chart';
import { DashboardContent } from '@shared/components/DashboardContent';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@shared/components/DashboardContentView/Error';
import { numberWithUnitFormatter } from '@shared/utils/formatters';

const GET_USER_COUNT_PER_LEVEL = gql(/* GraphQL */ `
  query GetUserCountPerLevel {
    getHomeUser {
      userCountPerLevel {
        level
        value
      }
    }
  }
`);

export const UserCountPerLevel = () => {
  const title = '여행 중인 유저 레벨 분포';
  const { loading, error, data } = useQuery(GET_USER_COUNT_PER_LEVEL);

  if (loading) {
    return <DashboardContentLoading title={title} />;
  }
  if (error) {
    return <DashboardContentBadRequest title={title} message={error.message} />;
  }
  if (!data) {
    return <DashboardContentNotFound title={title} />;
  }

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
    plotOptions: {
      bar: {
        borderRadius: 2,
      },
    },
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
