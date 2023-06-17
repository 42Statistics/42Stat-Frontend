import { gql } from '@/__generated__';
import { useQuery } from '@apollo/client';
import { Loader } from '@components/common';
import { LineChart } from '@components/elements/Chart';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@components/elements/DashboardContentView/Error';
import { DashboardContent } from '@components/templates/DashboardContent';
import { useTheme } from '@emotion/react';
import { useParams } from 'react-router-dom';

const GET_LEVEL_RECORDS = gql(/* GraphQL */ `
  query getLevelRecords($login: String!) {
    getPersonalGeneralPage(login: $login) {
      levelRecords {
        after
        userLevel
        averageLevel
      }
    }
  }
`);

export const LevelRecords = () => {
  const { username } = useParams() as { username: string };

  const title = '레벨 증가 그래프';
  const description = `멤버 평균과 비교`;
  const { loading, error, data } = useQuery(GET_LEVEL_RECORDS, {
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

  /**
   * 현재 n 일후이지만 나중에 날자로 변경해야 할 경우 사용
   */
  // const today = new Date();
  // const currentYear = today.getFullYear();

  // const createDate = (year, monthIndex) => {
  //   const month = monthIndex + 1;
  //   const date = new Date(year, month - 1, 1);
  //   return date;
  // };

  const userLevelSeries = levelRecords.map(
    ({ after, userLevel, averageLevel }, idx) => ({
      // x: createDate(currentYear, idx),
      x: after,
      y: userLevel,
    }),
  );
  const averageLevelSeries = levelRecords.map(
    ({ after, userLevel, averageLevel }, idx) => ({
      // x: createDate(currentYear, idx),
      x: after,
      y: averageLevel,
    }),
  );
  const series = [
    {
      name: '유저', // TODO: user login 가져오기
      data: userLevelSeries,
    },
    {
      name: '멤버 평균',
      data: averageLevelSeries,
    },
  ];

  return (
    <DashboardContent title={title} description={description}>
      <LevelRecordsChart series={series} />
    </DashboardContent>
  );
};

type LevelRecordsChartProps = {
  series: ApexAxisChartSeries;
};

const LevelRecordsChart = ({ series }: LevelRecordsChartProps) => {
  const theme = useTheme();

  const options: ApexCharts.ApexOptions = {
    colors: [theme.colors.primary.default, theme.colors.accent.default],
    xaxis: {
      // type: 'datetime',
      labels: {
        // format: 'yy.MM.',
        formatter: (value) => `${value}일`,
      },
    },
    yaxis: {
      labels: {
        formatter: (value) => `lv. ${value}`,
      },
    },
    tooltip: {
      x: {
        // format: 'yyyy년 M월',
        formatter: (value) => `${(value - 1) * 50}일 후`,
      },
    },
  };

  return <LineChart series={series} options={options} />;
};
