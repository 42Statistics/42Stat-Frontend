import { gql } from '@/__generated__';
import { Spinner } from '@/components/common';
import { BarChart } from '@/components/elements/Chart';
import { numberWithUnitFormatter } from '@/utils/formatters';
import { useQuery } from '@apollo/client';

const GET_USER_CNT_PER_LEVELS = gql(/* GraphQL */ `
  query getUserCntPerLevels {
    getTotalPage {
      userCntPerLevels {
        userCnt
        level
      }
    }
  }
`);

export const UserCntPerLevels = () => {
  const { loading, error, data } = useQuery(GET_USER_CNT_PER_LEVELS);

  if (loading) return <Spinner />;

  if (error) {
    return <h1>{error.message}</h1>;
  }
  if (!data) {
    return <h1>user not found</h1>;
  }

  const { userCntPerLevels } = data.getTotalPage;
  const categories = userCntPerLevels.map(({ level }) => level);
  const seriesData = userCntPerLevels.map(({ userCnt }) => userCnt);
  const series: ApexAxisChartSeries = [
    {
      name: '인원수',
      data: seriesData,
    },
  ];

  return <UserCntPerLevelsChart categories={categories} series={series} />;
};

type UserCntPerLevelsChartProps = {
  categories: number[];
  series: ApexAxisChartSeries;
};

const UserCntPerLevelsChart = ({
  categories,
  series,
}: UserCntPerLevelsChartProps) => {
  const options: ApexCharts.ApexOptions = {
    xaxis: {
      categories,
      labels: {
        formatter: (value) => value,
      },
    },
    yaxis: {
      max: 100,
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
