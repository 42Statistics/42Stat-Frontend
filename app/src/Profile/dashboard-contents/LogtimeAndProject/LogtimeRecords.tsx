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

const GET_LOGTIME_RECORDS_BY_LOGIN = gql(/* GraphQL */ `
  query GetLogtimeRecords($login: String!, $last: Int!) {
    getPersonalGeneral(login: $login) {
      logtimeRecords(last: $last) {
        at
        value
      }
    }
  }
`);

export const LogtimeRecords = () => {
  const { login } = useContext(UserProfileContext);
  const beginAt = useContext(BeginAtContext);
  const last = differenceInCalendarMonths(new Date(), beginAt) + 1;

  const title = '월간 접속 시간 추이';
  const { loading, error, data } = useQuery(GET_LOGTIME_RECORDS_BY_LOGIN, {
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

  const { logtimeRecords } = data.getPersonalGeneral;
  const seriesData = injectEmptyMonth(
    logtimeRecords.map(({ at, value }) => ({
      x: new Date(at),
      y: value,
    })),
    last,
  );
  const series: ApexAxisChartSeries = [
    {
      name: '접속 시간',
      data: seriesData,
    },
  ];

  return (
    <DashboardContent title={title} type="ApexCharts">
      <LogtimeRecordsChart series={series} />
    </DashboardContent>
  );
};

type LogtimeRecordsChartProps = {
  series: ApexAxisChartSeries;
};

const LogtimeRecordsChart = ({ series }: LogtimeRecordsChartProps) => {
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
    yaxis: {
      labels: {
        formatter: (value) => Math.floor(value / 60).toString(),
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
    forecastDataPoints: {
      count: 1,
    },
  };
  return <AreaChart series={series} options={options} />;
};
