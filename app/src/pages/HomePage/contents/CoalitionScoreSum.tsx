import { gql } from '@/__generated__';
import { Loader } from '@/components/common';
import { BarChart } from '@/components/elements/Chart';
import { ApolloNotFound } from '@/components/elements/DashboardContentView';
import { ApolloBadRequest } from '@/components/elements/DashboardContentView/ApolloBadRequest';
import { DashboardContent } from '@/components/templates/Dashboard';
import { millionFormatter } from '@/utils/formatters';
import { useQuery } from '@apollo/client';
import { useTheme } from '@emotion/react';

export const GET_COALITION_TOTAL_SCORES = gql(/* GraphQL */ `
  query getCoalitionTotalScores {
    getTotalPage {
      totalScores {
        coalition {
          id
          name
          slug
          imageUrl
          coverUrl
          color
          userId
        }
        value
      }
    }
  }
`);

export const CoalitionScoreSum = () => {
  const title = '누적 코알리숑 스코어 합산';
  const { loading, error, data } = useQuery(GET_COALITION_TOTAL_SCORES);
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

  const { totalScores } = data.getTotalPage;

  const categories: string[] = [];
  const seriesData: number[] = [];
  const colorList: string[] = [];
  totalScores.forEach(({ coalition, value }) => {
    categories.push(coalition.name);
    colorList.push(coalition.color || 'black');
    seriesData.push(value);
  });
  // const categories = totalScores.map(({ coalition }) => coalition.name);
  // const seriesData = totalScores.map(({ value }) => value);

  const series: ApexAxisChartSeries = [
    {
      name: 'Coalition 합산 점수',
      data: seriesData,
    },
  ];

  return (
    <DashboardContent title={title}>
      <CoalitionScoreSumChart
        categories={categories}
        series={series}
        colors={colorList}
      />
    </DashboardContent>
  );
};

type CoalitionScoreSumChartProps = {
  categories: string[];
  series: ApexAxisChartSeries;
  colors: string[];
};

const CoalitionScoreSumChart = ({
  categories,
  series,
  colors,
}: CoalitionScoreSumChartProps) => {
  const theme = useTheme();

  const options: ApexCharts.ApexOptions = {
    plotOptions: {
      bar: {
        distributed: true,
      },
    },

    colors: colors,

    xaxis: {
      categories,
    },
    yaxis: {
      min: 2200000,
      max: 2900000,
      labels: {
        formatter: (value) => millionFormatter(value),
      },
    },
    dataLabels: {
      formatter: (value) => millionFormatter(value as number), // FIXME: Type Assertion
    },
  };

  return <BarChart options={options} series={series} />;
};
