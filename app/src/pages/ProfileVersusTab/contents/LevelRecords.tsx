import { gql } from '@shared/__generated__';
import { useQuery } from '@apollo/client';
import { userAtom } from '@atoms/userAtom';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@components/elements/DashboardContentView/Error';
import { DashboardContent } from '@components/templates/DashboardContent';
import { LevelRecordsChart } from '@pages/ProfileGeneralTab/contents';
import { useAtomValue } from 'jotai';
import { useParams } from 'react-router-dom';

const GET_LEVEL_RECORDS_VERSUS = gql(/* GraphQL */ `
  query GetLevelRecordsVersus($login1: String!, $login2: String!) {
    data1: getPersonalGeneral(login: $login1) {
      userLevelRecords {
        monthsPassed
        level
      }
    }
    data2: getPersonalGeneral(login: $login2) {
      userLevelRecords {
        monthsPassed
        level
      }
    }
  }
`);

export const LevelRecords = () => {
  const { username } = useParams() as { username: string };
  const user = useAtomValue(userAtom);

  const title = '레벨 증가 그래프';
  const description = '본과정 시작일로부터 최대 24개월';
  const { loading, error, data } = useQuery(GET_LEVEL_RECORDS_VERSUS, {
    variables: { login1: username, login2: user.login },
  });

  if (loading) {
    return <DashboardContentLoading title={title} description={description} />;
  }
  if (error) {
    return (
      <DashboardContentBadRequest
        title={title}
        description={description}
        message={error.message}
      />
    );
  }
  if (!data) {
    return <DashboardContentNotFound title={title} description={description} />;
  }

  const {
    data1: { userLevelRecords: levelRecords },
    data2: { userLevelRecords: myLevelRecords },
  } = data;

  const levelSeries = levelRecords.map(({ monthsPassed, level }) => ({
    x: monthsPassed,
    y: level,
  }));
  const myLevelSeries = myLevelRecords.map(({ monthsPassed, level }) => ({
    x: monthsPassed,
    y: level,
  }));

  const series = [
    {
      name: username,
      data: levelSeries,
    },
    {
      name: user.login,
      data: myLevelSeries,
    },
  ];

  return (
    <DashboardContent title={title} description={description} isApexChart>
      <LevelRecordsChart series={series} />
    </DashboardContent>
  );
};
