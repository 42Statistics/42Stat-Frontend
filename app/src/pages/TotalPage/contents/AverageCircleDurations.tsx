import { gql } from '@/__generated__';
import { Spinner } from '@/components/common';
import { HorizontalBarChart } from '@/components/elements/Chart';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@/components/elements/DashboardContentView';
import { numberWithUnitFormatter } from '@/utils/formatters';
import { useQuery } from '@apollo/client';

const GET_AVERAGE_CIRCLE_DURATION = gql(/* GraphQL */ `
  query getAverageCircleDuration {
    getTotalPage {
      averageCircleDurations {
        circle
        value
      }
    }
  }
`);

export const AverageCircleDurations = () => {
  const { loading, error, data } = useQuery(GET_AVERAGE_CIRCLE_DURATION);

  if (loading) return <Spinner />;
  if (error) return <ApolloBadRequest msg={error.message} />;
  if (!data) return <ApolloNotFound />;

  const { averageCircleDurations } = data.getTotalPage;
  const categories = averageCircleDurations.map(({ circle }) => String(circle));
  const seriesData = averageCircleDurations.map(({ value }) => value);
  const series: ApexAxisChartSeries = [
    {
      name: '통과할 때까지',
      data: seriesData,
    },
  ];

  return (
    <AverageCircleDurationsChart categories={categories} series={series} />
  );
};

type AverageCircleDurationsChartProps = {
  categories: string[];
  series: ApexAxisChartSeries;
};

const AverageCircleDurationsChart = ({
  categories,
  series,
}: AverageCircleDurationsChartProps) => {
  const options: ApexCharts.ApexOptions = {
    xaxis: {
      categories,
      tickAmount: 4,
      max: 500,
      labels: {
        formatter: (value) => numberWithUnitFormatter(parseInt(value), '일'),
      },
    },
    yaxis: {
      labels: {
        formatter: (value) => value + '서클',
      },
    },
    tooltip: {
      y: {
        formatter: (value) => numberWithUnitFormatter(value, '일'),
      },
    },
  };
  return <HorizontalBarChart series={series} options={options} />;
};
