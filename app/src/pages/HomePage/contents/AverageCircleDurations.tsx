import { gql } from '@/__generated__';
import { Loader } from '@/components/common';
import { HorizontalBarChart } from '@/components/elements/Chart';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@/components/elements/DashboardContentView';
import { DashboardContent } from '@/components/templates/Dashboard';
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

  if (loading) return <Loader />;
  if (error) return <ApolloBadRequest msg={error.message} />;
  if (!data) return <ApolloNotFound />;

  const { averageCircleDurations } = data.getTotalPage;
  const title = 'N서클 통과할 때까지의 누적 기간';
  const description = '(본과정 시작일 기준)';

  const categories = averageCircleDurations.map(({ circle }) => String(circle));
  const seriesData = averageCircleDurations.map(({ value }) => value);

  const seriesLabel = averageCircleDurations.reduce(
    (result: number[], { value }, idx) => {
      const prevValue = idx !== 0 ? averageCircleDurations[idx - 1]?.value : 0;
      result.push(value - prevValue);
      return result;
    },
    [],
  );

  const series: ApexAxisChartSeries = [
    {
      name: '평균 체류 기간',
      data: seriesData,
    },
  ];

  return (
    <DashboardContent title={title} description={description}>
      <AverageCircleDurationsChart
        categories={categories}
        series={series}
        seriesLabel={seriesLabel}
      />
    </DashboardContent>
  );
};

type AverageCircleDurationsChartProps = {
  categories: string[];
  series: ApexAxisChartSeries;
  seriesLabel: number[];
};

const AverageCircleDurationsChart = ({
  categories,
  series,
  seriesLabel,
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
      shared: false,
      y: {
        // formatter: (value) => numberWithUnitFormatter(value, '일'),
        formatter: (value, { dataPointIndex }) =>
          numberWithUnitFormatter(seriesLabel[dataPointIndex], '일'),
      },
    },
  };
  return <HorizontalBarChart series={series} options={options} />;
};
