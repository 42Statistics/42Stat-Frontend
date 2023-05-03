import { gql } from '@/__generated__';
import { LineChart } from '@/components/elements/Chart';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@/components/elements/DashboardContentView';
import { numberWithUnitFormatter } from '@/utils/formatters';
import { isDefined } from '@/utils/isDefined';
import { useQuery } from '@apollo/client';

export const GET_COALITION_SCORE_RECORD = gql(/* GraphQL */ `
  query getCoalitionScoreRecord {
    getTotalPage {
      scoreRecords {
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

export const CoalitionScoreDynamic = () => {
  const { loading, error, data } = useQuery(GET_COALITION_SCORE_RECORD);

  if (loading) return <></>;
  if (error) return <ApolloBadRequest msg={error.message} />;
  if (!data) return <ApolloNotFound />;

  const { scoreRecords } = data.getTotalPage;
  const colorList: string[] = [];
  const series = scoreRecords.map(({ coalition, records }) => {
    const seriesData = records.filter(isDefined).map(({ at, value }) => ({
      x: at,
      y: value,
    }));
    colorList.push(coalition.color || 'black');
    return {
      name: coalition.name,
      data: seriesData,
    };
  });

  return <CoalitionScoreDynamicChart series={series} colors={colorList} />;
};

type CoalitionScoreDynamicChartProps = {
  series: ApexAxisChartSeries;
  colors: string[];
};

const CoalitionScoreDynamicChart = ({
  series,
  colors,
}: CoalitionScoreDynamicChartProps) => {
  const options: ApexCharts.ApexOptions = {
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
