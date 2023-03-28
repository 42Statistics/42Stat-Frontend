import { VStack } from '@/components/common';
import { gql, useQuery } from '@apollo/client';

const GET_LAST_EXAM_RESULT = gql`
  query {
    getHomePage {
      lastExamResult {
        rank
        passCnt
        total
      }
    }
  }
`;
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
  const rankList = data.getHomePage.lastExamResult;

  return (
    <>
      <VStack>
        {rankList.map((x: any, idx: number) => (
          <div key={idx}>
            {x.rank}
            //
            {x.passCnt}
            //
            {x.total}
          </div>
        ))}
      </VStack>
    </>
  );
};
