import { useQuery } from '@apollo/client';
import { subMonths } from 'date-fns';

import { gql } from '@shared/__generated__';
import { AreaChart } from '@shared/components/Chart';
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
import { injectEmptyMonth } from '@shared/utils/injectEmptyMonth';
import { useDeviceType } from '@shared/utils/react-responsive/useDeviceType';

const GET_BLACKHOLED_COUNT_RECORDS = gql(/* GraphQL */ `
  query GetBlackholedCountRecords($last: Int!) {
    getHomeUser {
      blackholedCountRecords(last: $last) {
        at
        value
      }
    }
  }
`);

export const BlackholedCountRecords = () => {
  const title = '월간 블랙홀 인원 추이';

  const device = useDeviceType();
  const isDesktop = device === 'desktop';
  const last = isDesktop ? CALENDAR_MONTHS_FROM_FT_BEGIN_AT + 1 : 12;

  const { loading, error, data } = useQuery(GET_BLACKHOLED_COUNT_RECORDS, {
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

  const { blackholedCountRecords } = data.getHomeUser;
  const seriesData = injectEmptyMonth(
    blackholedCountRecords.map(({ at, value }) => ({
      x: new Date(at),
      y: value,
    })),
    last,
  );

  const series: ApexAxisChartSeries = [
    {
      name: '인원수',
      data: seriesData,
    },
  ];

  return (
    <DashboardContent title={title} type="ApexCharts">
      <BlackholedCountRecordsChart series={series} />
    </DashboardContent>
  );
};

type BlackholedCountRecordsChartProps = {
  series: ApexAxisChartSeries;
};

const BlackholedCountRecordsChart = ({
  series,
}: BlackholedCountRecordsChartProps) => {
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
        datetimeUTC: false,
        format: "'yy MMM",
      },
      min: subMonths(new Date(), 12).getTime(),
    },
    tooltip: {
      x: {
        format: 'yyyy년 M월',
      },
      y: {
        formatter: (value) => numberWithUnitFormatter(value, '명'),
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
  return <AreaChart series={series} options={options} />;
};
