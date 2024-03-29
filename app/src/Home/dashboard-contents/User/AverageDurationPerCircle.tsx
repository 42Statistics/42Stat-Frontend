import { useQuery } from '@apollo/client';

import { gql } from '@shared/__generated__';
import { HorizontalBarChart } from '@shared/components/Chart';
import { DashboardContent } from '@shared/components/DashboardContent';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@shared/components/DashboardContentView/Error';
import { numberWithUnitFormatter } from '@shared/utils/formatters/numberWithUnitFormatter';

const GET_AVERAGE_DURATION_PER_CIRCLE = gql(/* GraphQL */ `
  query GetAverageDurationPerCircle {
    getHomeUser {
      averageDurationPerCircle {
        circle
        value
      }
    }
  }
`);

export const AverageDurationPerCircle = () => {
  const title = '서클 별 평균 통과 기간';
  const description = '본과정 시작일 기준';
  const { loading, error, data } = useQuery(GET_AVERAGE_DURATION_PER_CIRCLE);

  if (loading) {
    return <DashboardContentLoading title={title} description={description} />;
  }
  if (error) {
    return (
      <DashboardContentBadRequest
        title={title}
        description={description}
        message={error.message}
      />
    );
  }
  if (!data) {
    return <DashboardContentNotFound title={title} description={description} />;
  }

  const { averageDurationPerCircle } = data.getHomeUser;

  const categories = averageDurationPerCircle.map(({ circle }) =>
    circle.toString(),
  );
  const seriesData = averageDurationPerCircle.map(({ value }) => value);

  const seriesLabel = averageDurationPerCircle.reduce(
    (result: number[], { value }, idx) => {
      const prevValue =
        idx !== 0 ? averageDurationPerCircle[idx - 1]?.value : 0;
      result.push(value - prevValue);
      return result;
    },
    [],
  );

  const series: ApexAxisChartSeries = [
    {
      name: '이전 서클과의 차',
      data: seriesData,
    },
  ];

  return (
    <DashboardContent title={title} description={description} type="ApexCharts">
      <AverageDurationPerCircleChart
        categories={categories}
        series={series}
        seriesLabel={seriesLabel}
      />
    </DashboardContent>
  );
};

type AverageDurationPerCircleChartProps = {
  categories: string[];
  series: ApexAxisChartSeries;
  seriesLabel: number[];
};

const AverageDurationPerCircleChart = ({
  categories,
  series,
  seriesLabel,
}: AverageDurationPerCircleChartProps) => {
  const options: ApexCharts.ApexOptions = {
    plotOptions: {
      bar: {
        borderRadius: 4,
      },
    },
    xaxis: {
      categories,
      tickAmount: 4,
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
        // formatter: (value) => numberWithUnitFormatter(value, '일'),
        formatter: (value, { dataPointIndex }) =>
          numberWithUnitFormatter(seriesLabel[dataPointIndex], '일'),
      },
      marker: {
        show: false,
      },
    },
  };
  return <HorizontalBarChart series={series} options={options} />;
};
