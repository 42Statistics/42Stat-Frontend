import { VStack } from '@/components/common';
import { gql } from '@/__generated__';
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
  if (loading) {
    return <h1>loading...</h1>;
  }

  if (error) {
    return <h1>{error.message}</h1>;
  }

  if (!data) {
    return <h1>user not found</h1>;
  }
  const result = data.getHomePage.lastExamResult;

  return (
    <>
      <VStack>
        {result.map(({ rank, passCnt, totalCnt }, idx) => (
          <div key={idx}>
            {rank}/{passCnt}/{totalCnt}
          </div>
        ))}
      </VStack>
    </>
  );
};
