import { gql } from '@/__generated__';
import { Loader } from '@/components/common';
import { LineChart } from '@/components/elements/Chart';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@/components/elements/DashboardContentView';
import { DashboardContent } from '@/components/templates/Dashboard';
import { dateFormatter } from '@/utils/formatters';
import { useQuery } from '@apollo/client';
import { useTheme } from '@emotion/react';

const GET_LEVEL_GRAPH = gql(/* GraphQL */ `
  query getLevelGraph {
    getPersonGeneralPage {
      levelGraphs {
        data {
          date
          userLevel
          averageLevel
        }
        from
        to
      }
    }
  }
`);

export const LevelGraph = () => {
  const { loading, error, data } = useQuery(GET_LEVEL_GRAPH);

  if (loading) return <Loader />;
  if (error) return <ApolloBadRequest msg={error.message} />;
  if (!data) return <ApolloNotFound />;

  const { levelGraphs } = data.getPersonGeneralPage;
  const [from, to] = [levelGraphs.from, levelGraphs.to];
  const [fromStr, toStr] = [dateFormatter(from, 'lg'), dateFormatter(to, 'lg')];

  const userLevelSeries = levelGraphs.data.map(({ date, userLevel }) => ({
    x: date,
    y: userLevel,
  }));
  const averageLevelSeries = levelGraphs.data.map(({ date, averageLevel }) => ({
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

  const title = '레벨 증가 그래프';
  const description = `(${toStr} 기준 / 과거 1년)`;

  return (
    <DashboardContent title={title} description={description}>
      <LevelGraphChart series={series} />
    </DashboardContent>
  );
};

type LevelGraphChartProps = {
  series: ApexAxisChartSeries;
};

const LevelGraphChart = ({ series }: LevelGraphChartProps) => {
  const theme = useTheme();

  const options: ApexCharts.ApexOptions = {
    colors: [theme.colors.primary.default, theme.colors.accent.default],
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
