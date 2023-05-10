import { gql } from '@/__generated__';
import { Loader } from '@/components/common';
import { LineChart } from '@/components/elements/Chart';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@/components/elements/DashboardContentView';
import { DashboardContent } from '@/components/templates/Dashboard';
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

  if (loading) return <Loader />;
  if (error) return <ApolloBadRequest msg={error.message} />;
  if (!data) return <ApolloNotFound />;

  const { scoreRecords } = data.getTotalPage;
  const title = '역대 코알리숑 스코어 변동 추이';

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

  return (
    <DashboardContent title={title}>
      <CoalitionScoreDynamicChart series={series} colors={colorList} />
    </DashboardContent>
  );
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
