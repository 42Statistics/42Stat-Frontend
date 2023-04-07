import { gql } from '@/__generated__';
import { Spinner } from '@/components/common';
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

  const { lastExamResult } = data.getHomePage;
  const showData: string[] = [];
  const barData: number[] = [];
  const labels: string[] = [];

  lastExamResult.forEach(({ rank, passCnt, totalCnt }, idx) => {
    labels.push(`Rank ${rank.toString().padStart(2, '0')}`);
    barData.push(Math.round((passCnt / totalCnt) * 1000) / 10);
    showData.push(passCnt.toString() + '/' + totalCnt.toString());
  });

  return (
    <BarChart
      data={barData}
      yUnit="%"
      showData={showData}
      labels={labels}
      seriesName="통과/전체"
    />
  );
};
