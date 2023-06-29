import { gql } from '@/__generated__';
import { useQuery } from '@apollo/client';
import { Loader } from '@components/common';
import { LineChart } from '@components/elements/Chart';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@components/elements/DashboardContentView/Error';
import { DashboardContent } from '@components/templates/DashboardContent';
import { numberWithUnitFormatter } from '@utils/formatters';
import { isDefined } from '@utils/isDefined';

export const GET_SCORE_RECORDS_PER_COALITION = gql(/* GraphQL */ `
  query GetScoreRecordsPerCoalition {
    getHomeCoalition {
      scoreRecordsPerCoalition {
        coalition {
          id
          name
          slug
          imageUrl
          coverUrl
          color
          score
          userId
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
  if (loading)
    return (
      <DashboardContent title={title}>
        <Loader />
      </DashboardContent>
    );
  if (error)
    return (
      <DashboardContent title={title}>
        <ApolloBadRequest msg={error.message} />
      </DashboardContent>
    );
  if (!data)
    return (
      <DashboardContent title={title}>
        <ApolloNotFound />
      </DashboardContent>
    );

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
    <DashboardContent title={title}>
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
