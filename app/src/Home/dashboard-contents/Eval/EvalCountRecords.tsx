import { useQuery } from '@apollo/client';
import { subDays } from 'date-fns';

import { gql } from '@shared/__generated__';
import { AreaChart } from '@shared/components/Chart';
import { DashboardContent } from '@shared/components/DashboardContent';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@shared/components/DashboardContentView/Error';
import { MILLISECONDS } from '@shared/constants/date';
import { numberWithUnitFormatter } from '@shared/utils/formatters/numberWithUnitFormatter';
import { injectEmptyDay } from '@shared/utils/injectEmptyDay';

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
  const last = 365;

  const { loading, error, data } = useQuery(GET_EVAL_COUNT_RECORDS, {
    variables: {
      last,
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
  const seriesData = injectEmptyDay(
    evalCountRecords.map(({ at, value }) => ({
      x: new Date(at),
      y: value,
    })),
    last,
  );
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
    chart: {
      events: {
        beforeZoom: (ctx, { xaxis }) => {
          if (xaxis.max - xaxis.min < MILLISECONDS.DAY * 2) {
            return {
              xaxis: {
                min: ctx.minX,
                max: ctx.maxX,
              },
            };
          }

          const newMinX = Math.max(xaxis.min, ctx.w.globals.initialMinX);
          const newMaxX = Math.min(xaxis.max, ctx.w.globals.initialMaxX);

          return {
            xaxis: {
              min: newMinX,
              max: newMaxX,
            },
          };
        },
      },
    },
    xaxis: {
      type: 'datetime',
      labels: {
        format: 'MMM d',
        datetimeUTC: false,
      },
      min: subDays(new Date(), 18).getTime(),
    },
    tooltip: {
      x: {
        format: 'yyyy년 M월 d일',
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
