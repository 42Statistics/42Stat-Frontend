import { gql } from '@/__generated__';
import { useQuery } from '@apollo/client';
import { Loader } from '@components/common';
import { BarChart } from '@components/elements/Chart';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@components/elements/DashboardContentView';
import { DashboardContent } from '@components/templates/DashboardContent';
import { numberWithUnitFormatter } from '@utils/formatters';

const GET_USER_COUNT_PER_LEVELS = gql(/* GraphQL */ `
  query getUserCountPerLevels {
    getTotalPage {
      userCountPerLevels {
        userCount
        level
      }
    }
  }
`);

export const UserCountPerLevels = () => {
  const title = '여행 중인 유저 레벨 분포';
  const { loading, error, data } = useQuery(GET_USER_COUNT_PER_LEVELS);
  if (loading)
    return (
      <DashboardContent title={title}>
        <Loader />
      </DashboardContent>
    );
  if (error)
    return (
      <DashboardContent title={title}>
        <ApolloBadRequest msg={error.message} />
      </DashboardContent>
    );
  if (!data)
    return (
      <DashboardContent title={title}>
        <ApolloNotFound />
      </DashboardContent>
    );

  const { userCountPerLevels } = data.getTotalPage;

  const categories = userCountPerLevels.map(({ level }) => level);
  const seriesData = userCountPerLevels.map(({ userCount }) => userCount);
  //Y축 범례 최대값 추출 로직
  const _maxY = Math.max(...Object.values(seriesData));
  const maxY = Math.ceil(_maxY / 100) * 100;

  const series: ApexAxisChartSeries = [
    {
      name: '인원수',
      data: seriesData,
    },
  ];

  return (
    <DashboardContent title={title}>
      <UserCountPerLevelsChart
        categories={categories}
        series={series}
        maxY={maxY}
      />
    </DashboardContent>
  );
};

type UserCountPerLevelsChartProps = {
  categories: number[];
  series: ApexAxisChartSeries;
  maxY: number;
};

const UserCountPerLevelsChart = ({
  categories,
  series,
  maxY,
}: UserCountPerLevelsChartProps) => {
  const options: ApexCharts.ApexOptions = {
    xaxis: {
      categories,
      labels: {
        formatter: (value) => value,
      },
    },
    yaxis: {
      max: maxY,
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
