import { Spinner } from '@/components/common';
import { BarChart } from '@/components/elements/charts/presets/BarChart';
import { gql } from '@/__generated__';
import { useQuery } from '@apollo/client';

const GET_USER_CNT_PER_POINTS = gql(/* GraphQL */ `
  query getUserCntPerPoints {
    getTotalPage {
      userCntPerPoints {
        userCnt
        point
      }
    }
  }
`);

export const UserCntPerPoints = () => {
  const { loading, error, data } = useQuery(GET_USER_CNT_PER_POINTS);

  if (loading) return <Spinner />;
  if (error) {
    return <h1>{error.message}</h1>;
  }
  if (!data) {
    return <h1>user not found</h1>;
  }

  const result = data.getTotalPage.userCntPerPoints;
  const showDatas: string[] = [];
  const barDatas: number[] = [];
  const labels: string[] = [];

  let totalNum = 0;
  result.forEach(({ userCnt, point }, idx) => {
    labels.push(point.toString() + '점');
    showDatas.push(userCnt.toString());
    totalNum += userCnt;
  });
  result.forEach(({ userCnt }) => {
    barDatas.push(Math.round((userCnt / totalNum) * 1000) / 10);
  });

  return (
    <BarChart
      data={barDatas}
      yUnit="%"
      showData={showDatas}
      labels={labels}
      size="lg"
      seriesName="인원수"
    />
  );
};
