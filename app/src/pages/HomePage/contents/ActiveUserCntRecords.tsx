import { gql } from '@/__generated__';
import { Loader } from '@/components/common';
import { AreaChart } from '@/components/elements/Chart';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@/components/elements/DashboardContentView';
import { DashboardContent } from '@/components/templates/Dashboard';
import { numberWithUnitFormatter } from '@/utils/formatters';
import { useQuery } from '@apollo/client';

const GET_ACTIVE_USER_CNT_RECORD = gql(/* GraphQL */ `
  query getActiveUserCntRecord {
    getTotalPage {
      activeUserCountRecords {
        at
        value
      }
    }
  }
`);

export const ActiveUserCntRecords = () => {
  const title = '활성화 유저 수 추이';
  const { loading, error, data } = useQuery(GET_ACTIVE_USER_CNT_RECORD);
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

  const { activeUserCountRecords } = data.getTotalPage;
  const seriesData = activeUserCountRecords.map(({ at, value }) => ({
    x: at,
    y: value,
  }));
  const series: ApexAxisChartSeries = [
    {
      name: '활성화 유저',
      data: seriesData,
    },
  ];

  return (
    <DashboardContent title={title}>
      <ActiveUserCntRecordsChart series={series} />
    </DashboardContent>
  );
};

type ActiveUserCntRecordsChartProps = {
  series: ApexAxisChartSeries;
};

const ActiveUserCntRecordsChart = ({
  series,
}: ActiveUserCntRecordsChartProps) => {
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
