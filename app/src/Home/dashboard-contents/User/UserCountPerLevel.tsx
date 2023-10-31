import { useQuery } from '@apollo/client';

import { gql } from '@shared/__generated__';
import { BarChart } from '@shared/components/Chart';
import { DashboardContent } from '@shared/components/DashboardContent';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@shared/components/DashboardContentView/Error';
import { InfoTooltip } from '@shared/components/InfoTooltip';
import { numberWithUnitFormatter } from '@shared/utils/formatters/numberWithUnitFormatter';

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

  const categories = userCountPerLevel
    .filter(({ level }) => level < 12)
    .map(({ level }) => level.toString());

  const seriesData = userCountPerLevel
    .filter(({ level }) => level < 12)
    .map(({ value }) => value);

  const userCountMoreThanLevel12 = userCountPerLevel
    .filter(({ level }) => level >= 12)
    .reduce((acc, { value }) => acc + value, 0);

  if (userCountMoreThanLevel12 > 0) {
    categories.push('12+');
    seriesData.push(userCountMoreThanLevel12);
  }

  const series: ApexAxisChartSeries = [
    {
      name: '인원수',
      data: seriesData,
    },
  ];

  return (
    <DashboardContent
      title={title}
      titleRight={
        <InfoTooltip text="여행 중 : 멤버 포함, 블랙홀 제외한 러너" />
      }
      type="ApexCharts"
    >
      <UserCountPerLevelChart categories={categories} series={series} />
    </DashboardContent>
  );
};

type UserCountPerLevelChartProps = {
  categories: string[];
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
        rotate: 0,
      },
    },
    yaxis: {
      labels: {
        formatter: (value) => numberWithUnitFormatter(value, '명'),
      },
    },
    tooltip: {
      x: {
        formatter: (value) => `레벨 ${value}`,
      },
      marker: {
        show: false,
      },
    },
  };

  return <BarChart options={options} series={series} />;
};
