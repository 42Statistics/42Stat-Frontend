import { gql } from '@/__generated__';
import { useQuery } from '@apollo/client';
import { Loader } from '@components/common';
import { BarChart } from '@components/elements/Chart';
import { ApolloNotFound } from '@components/elements/DashboardContentView';
import { ApolloBadRequest } from '@components/elements/DashboardContentView/ApolloBadRequest';
import { DashboardContent } from '@components/templates/DashboardContent';
import { millionFormatter } from '@utils/formatters';

export const GET_TOTAL_SCORES_PER_COALITION = gql(/* GraphQL */ `
  query getTotalScoresPerCoalition {
    getHomeCoalition {
      totalScoresPerCoalition {
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

export const TotalScoresPerCoalition = () => {
  const title = '누적 코알리숑 스코어 합산';
  const { loading, error, data } = useQuery(GET_TOTAL_SCORES_PER_COALITION);
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

  const { totalScoresPerCoalition } = data.getHomeCoalition;

  const categories: string[] = [];
  const seriesData: number[] = [];
  const colors: string[] = [];
  totalScoresPerCoalition.forEach(({ coalition, value }) => {
    categories.push(coalition.name);
    seriesData.push(value);
    colors.push(coalition.color ?? 'black');
  });

  const series: ApexAxisChartSeries = [
    {
      name: 'Coalition 합산 점수',
      data: seriesData,
    },
  ];

  return (
    <DashboardContent title={title}>
      <TotalScoresPerCoalitionChart
        categories={categories}
        series={series}
        colors={colors}
      />
    </DashboardContent>
  );
};

type TotalScoresPerCoalitionChartProps = {
  categories: string[];
  series: ApexAxisChartSeries;
  colors: string[];
};

const TotalScoresPerCoalitionChart = ({
  categories,
  series,
  colors,
}: TotalScoresPerCoalitionChartProps) => {
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
      min: 2500000,
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
