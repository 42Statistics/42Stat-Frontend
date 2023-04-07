import { Spinner } from '@/components/common';
import { BarChart } from '@/components/elements/Chart';
import { gql } from '@/__generated__';
import { useQuery } from '@apollo/client';

const GET_USER_CNT_PER_LEVELS = gql(/* GraphQL */ `
  query getUserCntPerLevels {
    getTotalPage {
      userCntPerLevels {
        userCnt
        level
      }
    }
  }
`);

export const UserCntPerLevels = () => {
  const { loading, error, data } = useQuery(GET_USER_CNT_PER_LEVELS);

  if (loading) return <Spinner />;

  if (error) {
    return <h1>{error.message}</h1>;
  }
  if (!data) {
    return <h1>user not found</h1>;
  }

  const { userCntPerLevels } = data.getTotalPage;
  const showDatas: string[] = [];
  const barDatas: number[] = [];
  const labels: string[] = [];

  let totalNum = 0;
  userCntPerLevels.forEach(({ userCnt, level }, idx) => {
    labels.push(level.toString());
    showDatas.push(userCnt.toString());
    totalNum += userCnt;
  });
  userCntPerLevels.forEach(({ userCnt }) => {
    barDatas.push(Math.round((userCnt / totalNum) * 1000) / 10);
  });
  return (
    <BarChart
      data={barDatas}
      yUnit="%"
      showData={showDatas}
      labels={labels}
      seriesName="인원수"
    />
  );
};
