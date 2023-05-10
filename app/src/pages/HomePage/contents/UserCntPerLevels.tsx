import { gql } from '@/__generated__';
import { Loader } from '@/components/common';
import { BarChart } from '@/components/elements/Chart';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@/components/elements/DashboardContentView';
import { DashboardContent } from '@/components/templates/Dashboard';
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

  if (loading) return <Loader />;
  if (error) return <ApolloBadRequest msg={error.message} />;
  if (!data) return <ApolloNotFound />;

  const { userCntPerLevels } = data.getTotalPage;
  const title = '레벨 별 유저 분포';

  const categories = userCntPerLevels.map(({ level }) => level);
  const seriesData = userCntPerLevels.map(({ userCnt }) => userCnt);
  const series: ApexAxisChartSeries = [
    {
      name: '인원수',
      data: seriesData,
    },
  ];

  return (
    <DashboardContent title={title}>
      <UserCntPerLevelsChart categories={categories} series={series} />
    </DashboardContent>
  );
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
