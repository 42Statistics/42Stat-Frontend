import { useQuery } from '@apollo/client';
import { subMonths } from 'date-fns';
import { useTheme } from '@emotion/react';

import { gql } from '@shared/__generated__';
import { AreaChart } from '@shared/components/Chart';
import { IconTooltip } from '@shared/ui-kit/Tooltip/IconTooltip';
import { DashboardContent } from '@shared/components/DashboardContent';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@shared/components/DashboardContentView/Error';
import {
  CALENDAR_MONTHS_FROM_FT_BEGIN_AT,
  MILLISECONDS,
} from '@shared/constants/date';
import { BREAKPOINT } from '@shared/constants/responsive';
import { numberWithUnitFormatter } from '@shared/utils/formatters/numberWithUnitFormatter';
import { useDeviceType } from '@shared/utils/react-responsive/useDeviceType';

const GET_MONTHLY_ALIVE_USER_COUNT_RECORDS_FROM_END = gql(/* GraphQL */ `
  query GetMonthlyAliveUserCountRecordsFromEnd($last: Int!) {
    getHomeUser {
      monthlyAliveUserCountRecordsFromEnd(last: $last) {
        at
        value
      }
      monthlyActiveUserCountRecordsFromEnd(last: $last) {
        at
        value
      }
    }
  }
`);

export const AliveUserCountRecords = () => {
  const theme = useTheme();
  const title = '여행 중인 유저 수 추이';

  const device = useDeviceType();
  const isDesktop = device === 'desktop';
  const last = isDesktop ? CALENDAR_MONTHS_FROM_FT_BEGIN_AT + 1 : 12;

  const { loading, error, data } = useQuery(
    GET_MONTHLY_ALIVE_USER_COUNT_RECORDS_FROM_END,
    {
      variables: {
        last,
      },
    },
  );

  if (loading) {
    return <DashboardContentLoading title={title} />;
  }
  if (error) {
    return <DashboardContentBadRequest title={title} message={error.message} />;
  }
  if (!data) {
    return <DashboardContentNotFound title={title} />;
  }

  const seriesWithColor = [
    {
      name: '인원수',
      color: theme.colors.chart.accent.default,
      rawData: data.getHomeUser.monthlyAliveUserCountRecordsFromEnd,
    },
    {
      name: '활동중',
      color: theme.colors.chart.primary.default,
      rawData: data.getHomeUser.monthlyActiveUserCountRecordsFromEnd,
    },
  ].map(({ name, color, rawData }) => ({
    name,
    color,
    data: rawData.map(({ at, value }) => ({
      x: new Date(at),
      y: value,
    })),
  }));

  return (
    <DashboardContent
      title={title}
      titleRight={
        <IconTooltip text="여행 중 : 멤버 포함, 블랙홀 제외한 러너" />
      }
      type="ApexCharts"
    >
      <ActiveUserCountRecordsChart seriesWithColor={seriesWithColor} />
    </DashboardContent>
  );
};

type ActiveUserCountRecordsChartProps = {
  seriesWithColor: Array<ApexAxisChartSeries[0] & { color: string }>;
};

const ActiveUserCountRecordsChart = ({
  seriesWithColor,
}: ActiveUserCountRecordsChartProps) => {
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
        beforeResetZoom: (ctx) => {
          return {
            xaxis: {
              min: subMonths(new Date(), 12).getTime(),
              max: ctx.maxX,
            },
          };
        },
      },
    },
    xaxis: {
      type: 'datetime',
      labels: {
        format: "'yy MMM",
        datetimeUTC: false,
      },
      min: subMonths(new Date(), 12).getTime(),
    },
    colors: seriesWithColor.map(({ color }) => color),
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
    forecastDataPoints: {
      count: 1,
    },
    responsive: [
      {
        breakpoint: BREAKPOINT.TABLET,
        options: {
          chart: {
            event: {
              beforeZoom: undefined,
              beforeResetZoom: undefined,
            },
          },
          xaxis: {
            min: undefined,
          },
        },
      },
    ],
  };

  return (
    <AreaChart
      series={seriesWithColor.map(({ name, data }) => ({ name, data }))}
      options={options}
    />
  );
};
