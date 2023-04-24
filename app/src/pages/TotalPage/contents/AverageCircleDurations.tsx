import { gql } from '@/__generated__';
import { Spinner } from '@/components/common';
import { RangeBarChart } from '@/components/elements/Chart';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@/components/elements/DashboardContentView';
import {
  dDayFormatter,
  numberFormatter,
  numberWithUnitFormatter,
} from '@/utils/formatters';
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
  const seriesData = averageCircleDurations.reduce(
    (result: { x: number; y: [number, number] }[], { circle, value }, idx) => {
      const prevValue = idx !== 0 ? averageCircleDurations[idx - 1]?.value : 0;
      result.push({
        x: circle,
        y: [prevValue, value],
      });
      return result;
    },
    [],
  );
  const series: ApexAxisChartSeries = [
    {
      name: '평균 서클 체류 기간',
      data: seriesData,
    },
  ];

  return <AverageCircleDurationsChart series={series} />;
};

type AverageCircleDurationsChartProps = {
  series: ApexAxisChartSeries;
};

const AverageCircleDurationsChart = ({
  series,
}: AverageCircleDurationsChartProps) => {
  const options: ApexCharts.ApexOptions = {
    xaxis: {
      type: 'category',
      tickPlacement: 'on',
      labels: {
        formatter: (value) => numberFormatter(parseInt(value)),
      },
    },
    yaxis: {
      labels: {
        formatter: (value) => dDayFormatter(value),
      },
    },
    tooltip: {
      x: {
        formatter: (value) => numberWithUnitFormatter(value, '서클'),
      },
      y: {
        formatter: (value) => numberWithUnitFormatter(value, '일'),
      },
    },
  };
  return <RangeBarChart series={series} options={options} />;
};
