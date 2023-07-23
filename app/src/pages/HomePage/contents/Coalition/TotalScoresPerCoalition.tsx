import { gql } from '@shared/__generated__';
import { useQuery } from '@apollo/client';
import { BarChart } from '@components/elements/Chart';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@components/elements/DashboardContentView/Error';
import { DashboardContent } from '@components/templates/DashboardContent';
import { millionFormatter } from '@utils/formatters';

const GET_TOTAL_SCORES_PER_COALITION = gql(/* GraphQL */ `
  query GetTotalScoresPerCoalition {
    getHomeCoalition {
      totalScoresPerCoalition {
        coalition {
          ...coalitionFields
        }
        value
      }
    }
  }
`);

export const TotalScoresPerCoalition = () => {
  const title = '누적 코알리숑 스코어 합산';
  const { loading, error, data } = useQuery(GET_TOTAL_SCORES_PER_COALITION);

  if (loading) {
    return <DashboardContentLoading title={title} />;
  }
  if (error) {
    return <DashboardContentBadRequest title={title} message={error.message} />;
  }
  if (!data) {
    return <DashboardContentNotFound title={title} />;
  }

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
    <DashboardContent title={title} isApexChart>
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
        borderRadius: 5,
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
