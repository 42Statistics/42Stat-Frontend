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

const GET_EVAL_COUNT_RECORDS = gql(/* GraphQL */ `
  query GetEvalCountRecords($last: Int!) {
    getHomeEval {
      evalCountRecords(last: $last) {
        at
        value
      }
    }
  }
`);

export const EvalCountRecords = () => {
  const title = '일간 평가 횟수 추이';
  const { loading, error, data } = useQuery(GET_EVAL_COUNT_RECORDS, {
    variables: {
      last: 60,
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

  const { evalCountRecords } = data.getHomeEval;
  const seriesData = evalCountRecords.map(({ at, value }) => ({
    x: at,
    y: value,
  }));
  const series: ApexAxisChartSeries = [
    {
      name: '평가 횟수',
      data: seriesData,
    },
  ];

  return (
    <DashboardContent title={title} type="ApexCharts">
      <EvalCountRecordsChart series={series} />
    </DashboardContent>
  );
};

type EvalCountRecordsChartProps = {
  series: ApexAxisChartSeries;
};

const EvalCountRecordsChart = ({ series }: EvalCountRecordsChartProps) => {
  const options: ApexCharts.ApexOptions = {
    xaxis: {
      type: 'datetime',
      labels: {
        format: 'MMM d',
        datetimeUTC: false,
      },
    },
    tooltip: {
      x: {
        format: 'M월 d일',
      },
      y: {
        formatter: (value) => numberWithUnitFormatter(value, '회'),
      },
    },
    forecastDataPoints: {
      count: 1,
    },
  };
  return <AreaChart series={series} options={options} />;
};
