import { gql } from '@/__generated__';
import { useQuery } from '@apollo/client';
import { Loader } from '@components/common';
import { LineChart } from '@components/elements/Chart';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@components/elements/DashboardContentView';
import { DashboardContent } from '@components/templates/DashboardContent';
import { useTheme } from '@emotion/react';
import { useParams } from 'react-router-dom';

const GET_LEVEL_GRAPH = gql(/* GraphQL */ `
  query getLevelGraph($login: String!) {
    getPersonalGeneralPage(login: $login) {
      levelRecords {
        after
        userLevel
        averageLevel
      }
    }
  }
`);

export const LevelGraph = () => {
  const { username } = useParams() as { username: string };

  const title = '레벨 증가 그래프';
  const description = `현재일로부터 1년`;
  const { loading, error, data } = useQuery(GET_LEVEL_GRAPH, {
    variables: { login: username },
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

  const { levelRecords } = data.getPersonalGeneralPage;
  const today = new Date();
  const currentYear = today.getFullYear();

  const createDate = (year, monthIndex) => {
    const month = monthIndex + 1;
    const date = new Date(year, month - 1, 1);
    return date;
  };

  const userLevelSeries = levelRecords.map(
    ({ after, userLevel, averageLevel }, idx) => ({
      x: createDate(currentYear, idx),
      y: userLevel,
    }),
  );
  const averageLevelSeries = levelRecords.map(
    ({ after, userLevel, averageLevel }, idx) => ({
      x: createDate(currentYear, idx),
      y: averageLevel,
    }),
  );
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
