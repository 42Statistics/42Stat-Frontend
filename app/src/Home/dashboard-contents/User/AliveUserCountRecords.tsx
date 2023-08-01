import { useQuery } from '@apollo/client';
import { gql } from '@shared/__generated__';
import { AreaChart } from '@shared/components/Chart';
import { DashboardContent } from '@shared/components/DashboardContent';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@shared/components/DashboardContentView/Error';
import { numberWithUnitFormatter } from '@shared/utils/formatters/numberWithUnitFormatter';

const GET_ALIVE_USER_COUNT_RECORDS = gql(/* GraphQL */ `
  query GetAliveUserCountRecords {
    getHomeUser {
      aliveUserCountRecords {
        at
        value
      }
    }
  }
`);

export const AliveUserCountRecords = () => {
  const title = '여행 중인 유저 수 추이';
  const { loading, error, data } = useQuery(GET_ALIVE_USER_COUNT_RECORDS);

  if (loading) {
    return <DashboardContentLoading title={title} />;
  }
  if (error) {
    return <DashboardContentBadRequest title={title} message={error.message} />;
  }
  if (!data) {
    return <DashboardContentNotFound title={title} />;
  }

  const { aliveUserCountRecords } = data.getHomeUser;
  const seriesData = aliveUserCountRecords.map(({ at, value }) => ({
    x: at,
    y: value,
  }));
  const series: ApexAxisChartSeries = [
    {
      name: '',
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
        show: false,
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
      marker: {
        show: false,
      },
    },
  };
  return <AreaChart series={series} options={options} />;
};
