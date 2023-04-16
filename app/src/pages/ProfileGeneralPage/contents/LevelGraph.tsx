import { gql } from '@/__generated__';
import { Spinner } from '@/components/common';
import { LineChart } from '@/components/elements/Chart';
import { userAtom } from '@/utils/atoms/userAtom';
import { useQuery } from '@apollo/client';
import { useAtomValue } from 'jotai';

const GET_LEVEL_GRAPH = gql(/* GraphQL */ `
  query getLevelGraph {
    getPersonGeneralPage {
      levelGraphs {
        date
        userLevel
        averageLevel
      }
    }
  }
`);

export const LevelGraph = () => {
  const { loading, error, data } = useQuery(GET_LEVEL_GRAPH);
  const user = useAtomValue(userAtom);

  if (loading) return <Spinner />;
  if (error) {
    return <h1>{error.message}</h1>;
  }
  if (!data) {
    return <h1>user not found</h1>;
  }

  const { levelGraphs } = data.getPersonGeneralPage;
  const userLevelSeries = levelGraphs.map(({ date, userLevel }) => ({
    x: date,
    y: userLevel,
  }));
  const averageLevelSeries = levelGraphs.map(({ date, averageLevel }) => ({
    x: date,
    y: averageLevel,
  }));
  const series = [
    {
      name: '유저', // TODO: user login 가져오기
      data: userLevelSeries,
    },
    {
      name: '평균',
      data: averageLevelSeries,
    },
  ];

  return <LevelGraphChart series={series} />;
};

type LevelGraphChartProps = {
  series: ApexAxisChartSeries;
};

const LevelGraphChart = ({ series }: LevelGraphChartProps) => {
  const options: ApexCharts.ApexOptions = {
    xaxis: {
      type: 'datetime',
      labels: {
        format: 'yy.MM.',
      },
    },
    yaxis: {
      labels: {
        formatter: (value) => `lv. ${value}`,
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
