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
import { isDefined } from '@utils/isDefined';
import { useParams } from 'react-router-dom';

const GET_USER_LEVEL_RECORDS = gql(/* GraphQL */ `
  query GetUserLevelRecords($login: String!) {
    getPersonalGeneral(login: $login) {
      userLevelRecords {
        monthsPassed
        level
      }
      memberLevelRecords {
        monthsPassed
        level
      }
    }
  }
`);

export const LevelRecords = () => {
  const { username } = useParams() as { username: string };

  const title = '레벨 증가 그래프';
  const description = `멤버 평균과 비교`;
  const { loading, error, data } = useQuery(GET_USER_LEVEL_RECORDS, {
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

  const { userLevelRecords, memberLevelRecords } = data.getPersonalGeneral;

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

  const userLevelSeries = userLevelRecords
    .filter(isDefined) // 왜 얘는 isDefined가 있어야 돼?
    .map(({ monthsPassed, level }) => ({
      x: monthsPassed,
      y: level,
    }));
  const memberLevelSeries = memberLevelRecords.map(
    ({ monthsPassed, level }) => ({
      x: monthsPassed,
      y: level,
    }),
  );
  const series = [
    {
      name: username,
      data: userLevelSeries,
    },
    {
      name: '멤버 평균',
      data: memberLevelSeries,
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
        formatter: (value) => `${value}개월`,
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
        formatter: (value) => `${value}개월`,
      },
    },
  };

  return <LineChart series={series} options={options} />;
};
