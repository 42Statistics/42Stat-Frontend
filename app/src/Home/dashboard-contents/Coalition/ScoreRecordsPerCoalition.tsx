import { useQuery } from '@apollo/client';
import { subMonths } from 'date-fns';

import { gql } from '@shared/__generated__';
import { LineChart } from '@shared/components/Chart';
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
import { kiloFormatter } from '@shared/utils/formatters/kiloFormatter';
import { numberWithUnitFormatter } from '@shared/utils/formatters/numberWithUnitFormatter';
import { injectEmptyMonth } from '@shared/utils/injectEmptyMonth';
import { useDeviceType } from '@shared/utils/react-responsive/useDeviceType';

const GET_SCORE_RECORDS_PER_COALITION = gql(/* GraphQL */ `
  query GetScoreRecordsPerCoalition($last: Int!) {
    getHomeCoalition {
      scoreRecordsPerCoalition(last: $last) {
        coalition {
          ...coalitionFields
        }
        records {
          at
          value
        }
      }
    }
  }
`);

export const ScoreRecordsPerCoalition = () => {
  const title = '코알리숑 스코어 변동 추이';

  const device = useDeviceType();
  const isDesktop = device === 'desktop';
  const last = isDesktop ? CALENDAR_MONTHS_FROM_FT_BEGIN_AT + 1 : 8;

  const { loading, error, data } = useQuery(GET_SCORE_RECORDS_PER_COALITION, {
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

  const { scoreRecordsPerCoalition } = data.getHomeCoalition;

  const colors: string[] = [];
  const series = scoreRecordsPerCoalition.map(({ coalition, records }) => {
    const seriesData = injectEmptyMonth(
      records.map(({ at, value }) => ({
        x: new Date(at),
        y: value,
      })),
      last,
    );
    colors.push(coalition.color ?? 'black');
    return {
      name: coalition.name,
      data: seriesData,
    };
  });

  return (
    <DashboardContent title={title} type="ApexCharts">
      <ScoreRecordsPerCoalitionChart series={series} colors={colors} />
    </DashboardContent>
  );
};

type ScoreRecordsPerCoalitionChartProps = {
  series: ApexAxisChartSeries;
  colors: string[];
};

const ScoreRecordsPerCoalitionChart = ({
  series,
  colors,
}: ScoreRecordsPerCoalitionChartProps) => {
  const data = series.flatMap(
    (elem) => elem.data as { x: number; y: number }[],
  );
  const [min, max] = [
    Math.min(...data.map(({ y }) => y)),
    Math.max(...data.map(({ y }) => y)),
  ];

  const options: ApexCharts.ApexOptions = {
    chart: {
      width: '100%',
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
              min: subMonths(new Date(), 8).getTime(),
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
      min: subMonths(new Date(), 8).getTime(),
    },
    colors: colors,
    yaxis: {
      labels: {
        formatter: (value) => kiloFormatter(value, 0),
      },
      tickAmount: 4,
      min,
      max,
    },
    tooltip: {
      x: {
        format: 'yyyy년 M월',
      },
      y: {
        formatter: (value) => numberWithUnitFormatter(value, 'P'),
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

  return <LineChart series={series} options={options} />;
};
