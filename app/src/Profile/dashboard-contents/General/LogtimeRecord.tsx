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

const GET_LOGTIME_RECORD = gql(/* GraphQL */ `
  query GetLogtimeRecord($last: Int!) {
    getPersonalGeneral {
      logtimeRecord(last: $last) {
        at
        value
      }
    }
  }
`);

export const LogtimeRecord = () => {
  const title = '월간 접속 시간 추이';
  const { loading, error, data } = useQuery(GET_LOGTIME_RECORD, {
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

  const { logtimeRecord } = data.getPersonalGeneral;
  const seriesData = logtimeRecord.map(({ at, value }) => ({
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
    <DashboardContent title={title} type="ApexCharts">
      <LogtimeRecordChart series={series} />
    </DashboardContent>
  );
};

type LogtimeRecordChartProps = {
  series: ApexAxisChartSeries;
};

const LogtimeRecordChart = ({ series }: LogtimeRecordChartProps) => {
  const options: ApexCharts.ApexOptions = {
    xaxis: {
      type: 'datetime',

      labels: {
        datetimeUTC: false,
        format: "'yy MMM",
      },
    },
    yaxis: {
      labels: {
        formatter: (value) => String(Math.floor(value / 60)),
      },
    },
    tooltip: {
      x: {
        format: 'yyyy년 M월',
      },
      y: {
        formatter: (value) =>
          `${numberWithUnitFormatter(
            Math.floor(value / 60),
            '시간',
          )} ${numberWithUnitFormatter(value % 60, '분')}`,
      },
    },
  };
  return <AreaChart series={series} options={options} />;
};
