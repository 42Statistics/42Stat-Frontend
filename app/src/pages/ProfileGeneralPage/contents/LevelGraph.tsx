import { gql } from '@/__generated__';
import { Spinner } from '@/components/common';
import { LineChart } from '@/components/elements/Chart';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@/components/elements/DashboardContentView';
import { useQuery } from '@apollo/client';
import { useTheme } from '@emotion/react';

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

  if (loading) return <Spinner />;
  if (error) return <ApolloBadRequest msg={error.message} />;
  if (!data) return <ApolloNotFound />;

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
  const theme = useTheme();

  const options: ApexCharts.ApexOptions = {
    colors: [theme.colors.primary.default, theme.colors.secondary.default],
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
