import { gql } from '@/__generated__';
import { AreaChart } from '@/components/elements/Chart';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@/components/elements/DashboardContentView';
import { numberWithUnitFormatter } from '@/utils/formatters';
import { useQuery } from '@apollo/client';

const GET_ACTIVE_USER_CNT_RECORD = gql(/* GraphQL */ `
  query getActiveUserCntRecord {
    getTotalPage {
      activeUserCntRecords {
        at
        value
      }
    }
  }
`);

export const ActiveUserCntRecords = () => {
  const { loading, error, data } = useQuery(GET_ACTIVE_USER_CNT_RECORD);

  if (loading) return <></>;
  if (error) return <ApolloBadRequest msg={error.message} />;
  if (!data) return <ApolloNotFound />;

  const { activeUserCntRecords } = data.getTotalPage;
  const seriesData = activeUserCntRecords.map(({ at, value }) => ({
    x: at,
    y: value,
  }));
  const series: ApexAxisChartSeries = [
    {
      name: '활성화 유저',
      data: seriesData,
    },
  ];

  return <ActiveUserCntRecordsChart series={series} />;
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
