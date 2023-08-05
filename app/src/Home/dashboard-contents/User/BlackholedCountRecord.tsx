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

const GET_BLACKHOLED_COUNT_RECORD = gql(/* GraphQL */ `
  query GetBlackholedCountRecord($last: Int!) {
    getHomeUser {
      blackholedCountRecord(last: $last) {
        at
        value
      }
    }
  }
`);

export const BlackholedCountRecord = () => {
  const title = '월간 블랙홀 인원 추이';
  const { loading, error, data } = useQuery(GET_BLACKHOLED_COUNT_RECORD, {
    variables: {
      last: 12,
    },
  });

  if (loading) {
    return <DashboardContentLoading title={title} />;
  }
  if (error) {
    return <DashboardContentBadRequest title={title} message={error.message} />;
  }
  if (!data) {
    return <DashboardContentNotFound title={title} />;
  }

  const { blackholedCountRecord } = data.getHomeUser;
  const seriesData = blackholedCountRecord.map(({ at, value }) => ({
    x: at,
    y: value,
  }));
  const series: ApexAxisChartSeries = [
    {
      name: '인원수',
      data: seriesData,
    },
  ];

  return (
    <DashboardContent title={title} type="ApexCharts">
      <BlackholedCountRecordChart series={series} />
    </DashboardContent>
  );
};

type BlackholedCountRecordChartProps = {
  series: ApexAxisChartSeries;
};

const BlackholedCountRecordChart = ({
  series,
}: BlackholedCountRecordChartProps) => {
  const options: ApexCharts.ApexOptions = {
    xaxis: {
      type: 'datetime',

      labels: {
        datetimeUTC: false,
        format: "'yy MMM",
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
