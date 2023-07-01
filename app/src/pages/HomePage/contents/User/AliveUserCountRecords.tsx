import { useQuery } from '@apollo/client';
import { AreaChart } from '@components/elements/Chart';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@components/elements/DashboardContentView/Error';
import { DashboardContent } from '@components/templates/DashboardContent';
import { GET_HOME } from '@pages/HomePage/GET_HOME';
import { numberWithUnitFormatter } from '@utils/formatters';

export const AliveUserCountRecords = () => {
  const title = '여행 중인 유저 수 추이';
  const { loading, error, data } = useQuery(GET_HOME);
  if (loading) return <DashboardContentLoading />;
  if (error) return <DashboardContentBadRequest message={error.message} />;
  if (!data) return <DashboardContentNotFound />;

  const { aliveUserCountRecords } = data.getHomeUser;
  const seriesData = aliveUserCountRecords.map(({ at, value }) => ({
    x: at,
    y: value,
  }));
  const series: ApexAxisChartSeries = [
    {
      name: '여행 중인 유저',
      data: seriesData,
    },
  ];

  return (
    <DashboardContent title={title} isApexChart>
      <ActiveUserCountRecordsChart series={series} />
    </DashboardContent>
  );
};

type ActiveUserCountRecordsChartProps = {
  series: ApexAxisChartSeries;
};

const ActiveUserCountRecordsChart = ({
  series,
}: ActiveUserCountRecordsChartProps) => {
  const options: ApexCharts.ApexOptions = {
    xaxis: {
      type: 'datetime',
      labels: {
        format: 'yy.MM.',
      },
    },
    yaxis: {
      labels: {
        formatter: (value) => value.toLocaleString(),
      },
    },
    tooltip: {
      x: {
        format: 'yyyy년 M월',
      },
      y: {
        formatter: (value) => numberWithUnitFormatter(value, '명'),
      },
    },
  };
  return <AreaChart series={series} options={options} />;
};
