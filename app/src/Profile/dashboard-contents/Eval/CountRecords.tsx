import { useQuery } from '@apollo/client';
import { differenceInCalendarMonths, subMonths } from 'date-fns';
import { useContext } from 'react';

import { BeginAtContext } from '@/Profile/contexts/BeginAtContext';
import { UserProfileContext } from '@/Profile/contexts/UserProfileContext';
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
import { injectEmptyMonth } from '@shared/utils/injectEmptyMonth';

const GET_COUNT_RECORDS_BY_LOGIN = gql(/* GraphQL */ `
  query GetCountRecordsByLogin($login: String!, $last: Int!) {
    getPersonalEval(login: $login) {
      countRecords(last: $last) {
        at
        value
      }
    }
  }
`);

export const CountRecords = () => {
  const { login } = useContext(UserProfileContext);
  const beginAt = useContext(BeginAtContext);
  const last = differenceInCalendarMonths(new Date(), beginAt) + 1;

  const title = '월간 평가 횟수 추이';
  const { loading, error, data } = useQuery(GET_COUNT_RECORDS_BY_LOGIN, {
    variables: {
      login,
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

  const { countRecords } = data.getPersonalEval;
  const seriesData = injectEmptyMonth(
    countRecords.map(({ at, value }) => ({
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
      <CountRecordsChart series={series} />
    </DashboardContent>
  );
};

type CountRecordsChartProps = {
  series: ApexAxisChartSeries;
};

const CountRecordsChart = ({ series }: CountRecordsChartProps) => {
  const beginAt = useContext(BeginAtContext);

  const options: ApexCharts.ApexOptions = {
    chart: {
      events: {
        beforeZoom: (ctx, { xaxis }) => {
          if (xaxis.max - xaxis.min < MILLISECONDS.MONTH * 2) {
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
        beforeResetZoom: (ctx) => {
          return {
            xaxis: {
              min: Math.max(
                beginAt.getTime(),
                subMonths(new Date(), 12).getTime(),
              ),
              max: ctx.maxX,
            },
          };
        },
      },
    },
    xaxis: {
      type: 'datetime',
      labels: {
        datetimeUTC: false,
        format: "'yy MMM",
      },
      min: Math.max(beginAt.getTime(), subMonths(new Date(), 12).getTime()),
    },
    tooltip: {
      x: {
        format: 'yyyy년 M월',
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
