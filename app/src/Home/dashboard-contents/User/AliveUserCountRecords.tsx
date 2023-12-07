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
import { CustomTooltip } from '@shared/components/CustomTooltip';
import { MILLISECONDS } from '@shared/constants/date';
import { numberWithUnitFormatter } from '@shared/utils/formatters/numberWithUnitFormatter';

const GET_DAILY_ALIVE_USER_COUNT_RECORDS = gql(/* GraphQL */ `
  query GetDailyAliveUserCountRecords($last: Int!) {
    getHomeUser {
      dailyAliveUserCountRecords(last: $last) {
        at
        value
      }
    }
  }
`);

export const AliveUserCountRecords = () => {
  const title = '여행 중인 유저 수 추이';
  const last = 365;

  const { loading, error, data } = useQuery(
    GET_DAILY_ALIVE_USER_COUNT_RECORDS,
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

  const { dailyAliveUserCountRecords } = data.getHomeUser;
  const seriesData = dailyAliveUserCountRecords.map(({ at, value }) => ({
    x: new Date(at),
    y: value,
  }));
  const series: ApexAxisChartSeries = [
    {
      name: '인원수',
      data: seriesData,
    },
  ];

  return (
    <DashboardContent
      title={title}
      titleRight={
        <CustomTooltip text="여행 중 : 멤버 포함, 블랙홀 제외한 러너" />
      }
      type="ApexCharts"
    >
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
              min: subDays(new Date(), 18).getTime(),
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
      min: subDays(new Date(), 18).getTime(),
    },
    yaxis: {
      labels: {
        formatter: (value) => value.toLocaleString(),
      },
    },
    tooltip: {
      x: {
        format: 'yyyy년 M월 d일',
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
  };
  return <AreaChart series={series} options={options} />;
};
