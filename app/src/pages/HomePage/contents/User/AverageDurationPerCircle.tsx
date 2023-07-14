import { useQuery } from '@apollo/client';
import { HorizontalBarChart } from '@components/elements/Chart';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@components/elements/DashboardContentView/Error';
import { DashboardContent } from '@components/templates/DashboardContent';
import { GET_HOME } from '@pages/HomePage/GET_HOME';
import { numberWithUnitFormatter } from '@utils/formatters';

export const AverageDurationPerCircle = () => {
  const title = 'N서클 통과할 때까지의 누적 기간';
  const description = '본과정 시작일 기준';
  const { loading, error, data } = useQuery(GET_HOME);
  if (loading) return <DashboardContentLoading />;
  if (error) return <DashboardContentBadRequest message={error.message} />;
  if (!data) return <DashboardContentNotFound />;

  const { averageDurationPerCircle } = data.getHomeUser;

  const categories = averageDurationPerCircle.map(({ circle }) =>
    String(circle),
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
      name: '평균 체류 기간',
      data: seriesData,
    },
  ];

  return (
    <DashboardContent title={title} description={description} isApexChart>
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
        borderRadius: 6,
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
