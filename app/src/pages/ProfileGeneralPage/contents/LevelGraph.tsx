import { gql } from '@/__generated__';
import { Spinner } from '@/components/common';
import { LevelDynamicChart } from '@/components/elements/Chart/LevelDynamicChart';
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

  if (loading) return <Spinner />;
  if (error) {
    return <h1>{error.message}</h1>;
  }
  if (!data) {
    return <h1>user not found</h1>;
  }

  const { levelGraphs } = data.getPersonGeneralPage;
  const Datas1: number[] = [];
  const Datas2: number[] = [];
  const labels: string[] = [];

  // 기간 label 작성부
  levelGraphs.forEach(({ date, userLevel, averageLevel }) => {
    labels.push(date.substr(2, 5).replace('-', '.'));
    Datas1.push(userLevel);
    Datas2.push(averageLevel);
  });

  // 모든 value 하나의 배열에 담기

  // return (
  //   <CoalitionDynamicChart
  //     data={[...Datas1, ...Datas2]}
  //     yUnit=""
  //     labels={labels}
  //     size="long"
  //     seriesName="코알리숑 점수"
  //   />
  // );
  const user = useAtomValue(userAtom);
  return (
    <LevelDynamicChart
      data={[...Datas1, ...Datas2]}
      labels={labels}
      login={user.login}
    />
  );
};
