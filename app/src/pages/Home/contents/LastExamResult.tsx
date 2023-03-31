import { Spinner } from '@/components/common';
import { gql } from '@/__generated__';
import { BarChart } from '@/components/elements/charts/presets/BarChart';
import { useQuery } from '@apollo/client';

const GET_LAST_EXAM_RESULT = gql(/* GraphQL */ `
  query GetLastExamResult {
    getHomePage {
      lastExamResult {
        rank
        passCnt
        totalCnt
      }
    }
  }
`);

export const LastExamResult = () => {
  const { loading, error, data } = useQuery(GET_LAST_EXAM_RESULT);

  if (loading) return <Spinner />;

  if (error) {
    return <h1>{error.message}</h1>;
  }

  if (!data) {
    return <h1>user not found</h1>;
  }
  const result = data.getHomePage.lastExamResult;
  const showDatas: string[] = [];
  const barDatas: number[] = [];
  const labels: string[] = [];

  result.forEach(({ rank, passCnt, totalCnt }, idx) => {
    labels.push('Rank 0' + rank.toString());
    showDatas.push(passCnt.toString() + '/' + totalCnt.toString());
    barDatas.push(Math.round((passCnt / totalCnt) * 1000) / 10);
  });
  return (
    <>
      <BarChart
        data={barDatas}
        yUnit="%"
        showData={showDatas}
        labels={labels}
        size="lg"
        seriesName="통과/전체"
      />
    </>
  );
};
