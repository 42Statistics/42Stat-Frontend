import { gql } from '@/__generated__';
import { Loader } from '@/components/common';
import { LineChart } from '@/components/elements/Chart';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@/components/elements/DashboardContentView';
import { DashboardContent } from '@/components/templates/Dashboard';
import { userAtom } from '@/utils/atoms/userAtom';
import { useQuery } from '@apollo/client';
import { useTheme } from '@emotion/react';
import { useAtomValue } from 'jotai';
import { useParams } from 'react-router-dom';

const GET_LEVEL_GRAPH = gql(/* GraphQL */ `
  query getLevelGraph($uid: Int!) {
    getPersonGeneralPage(uid: $uid) {
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
  const { username } = useParams() as { username: string };
  const user = useAtomValue(userAtom);

  const title = '레벨 증가 그래프';
  const description = `현재일로부터 1년`;
  const { loading, error, data } = useQuery(GET_LEVEL_GRAPH, {
    variables: { uid: username === 'me' ? user.id : 110650 },
  });
  if (loading)
    return (
      <DashboardContent title={title} description={description}>
        <Loader />
      </DashboardContent>
    );
  if (error)
    return (
      <DashboardContent title={title} description={description}>
        <ApolloBadRequest msg={error.message} />
      </DashboardContent>
    );
  if (!data)
    return (
      <DashboardContent title={title} description={description}>
        <ApolloNotFound />
      </DashboardContent>
    );

  const { levelGraphs } = data.getPersonGeneralPage;
  const [from, to] = [levelGraphs.from, levelGraphs.to];

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
