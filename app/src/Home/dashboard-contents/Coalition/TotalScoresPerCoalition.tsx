import { useQuery } from '@apollo/client';

import { gql } from '@shared/__generated__';
import { BarChart } from '@shared/components/Chart';
import { DashboardContent } from '@shared/components/DashboardContent';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@shared/components/DashboardContentView/Error';
import { kiloFormatter } from '@shared/utils/formatters/kiloFormatter';
import { numberWithUnitFormatter } from '@shared/utils/formatters/numberWithUnitFormatter';

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
  const title = '누적 코알리숑 스코어';
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
      name: '',
      data: seriesData,
    },
  ];

  return (
    <DashboardContent title={title} type="ApexCharts">
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
  const data = series[0].data as number[];
  const [min, max] = [Math.min(...data), Math.max(...data)];

  const options: ApexCharts.ApexOptions = {
    plotOptions: {
      bar: {
        borderRadius: 5,
        distributed: true,
      },
    },
    legend: {
      show: false,
    },
    colors: colors,
    xaxis: {
      categories,
    },
    yaxis: {
      min: Math.floor((min - (max + 50000 - min)) / 100000) * 100000, // 최솟값이 50%에 위치하도록
      max: Math.ceil((max + 50000) / 100000) * 100000,
      tickAmount: 4,
      labels: {
        formatter: (value) => kiloFormatter(value, 2),
      },
    },
    dataLabels: {
      formatter: (value) => kiloFormatter(value as number, 2), // FIXME: Type Assertion
    },
    tooltip: {
      y: {
        formatter: (value) => numberWithUnitFormatter(value, 'P'),
      },
      marker: {
        show: false,
      },
    },
  };

  return <BarChart options={options} series={series} />;
};
