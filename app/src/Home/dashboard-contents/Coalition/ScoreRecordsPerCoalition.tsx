import { useQuery } from '@apollo/client';
import { gql } from '@shared/__generated__';
import { LineChart } from '@shared/components/Chart';
import { DashboardContent } from '@shared/components/DashboardContent';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@shared/components/DashboardContentView/Error';
import { kiloFormatter } from '@shared/utils/formatters/kiloFormatter';
import { numberWithUnitFormatter } from '@shared/utils/formatters/numberWithUnitFormatter';

const GET_SCORE_RECORDS_PER_COALITION = gql(/* GraphQL */ `
  query GetScoreRecordsPerCoalition {
    getHomeCoalition {
      scoreRecordsPerCoalition {
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
  const { loading, error, data } = useQuery(GET_SCORE_RECORDS_PER_COALITION);

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
    const seriesData = records.map(({ at, value }) => ({
      x: at,
      y: value,
    }));
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
    },
    xaxis: {
      type: 'datetime',
      labels: {
        datetimeUTC: false,
        format: "'yy MMM",
      },
    },
    colors: colors,
    yaxis: {
      min: Math.floor(min / 10000) * 10000,
      max: Math.ceil(max / 10000) * 10000,
      labels: {
        formatter: (value) => kiloFormatter(value, 0),
      },
      tickAmount: 4,
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
  };

  return <LineChart series={series} options={options} />;
};
