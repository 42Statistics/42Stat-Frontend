import { useQuery } from '@apollo/client';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@components/elements/DashboardContentView/Error';
import { gql } from '@shared/__generated__';
import { LineChart } from '@shared/components/Chart';
import { DashboardContent } from '@shared/components/DashboardContent';
import { numberWithUnitFormatter } from '@shared/utils/formatters';
import { isDefined } from '@shared/utils/isDefined';

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
  const title = '역대 코알리숑 스코어 변동 추이';
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
    const seriesData = records.filter(isDefined).map(({ at, value }) => ({
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
    <DashboardContent title={title} isApexChart>
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
  const options: ApexCharts.ApexOptions = {
    chart: {
      width: '100%',
    },
    xaxis: {
      type: 'datetime',
      labels: {
        datetimeUTC: false,
        format: 'yy.MM.',
      },
    },
    colors: colors,
    yaxis: {
      labels: {
        formatter: (value) => numberWithUnitFormatter(value, 'P'),
      },
    },
    tooltip: {
      x: {
        format: 'yyyy년 M월',
      },
    },
  };

  return <LineChart series={series} options={options} />;
};
