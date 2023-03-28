import { VStack } from '@/components/common';
import { gql, useQuery } from '@apollo/client';

const GET_TOTAL_EVAL_CNT = gql`
  query {
    getHomePage {
      totalEvalCntRank {
        userPreview {
          id
          login
          imgUrl
        }
        value
      }
    }
  }
`;
export const TotalEvalCntRank = () => {
  const { loading, error, data } = useQuery(GET_TOTAL_EVAL_CNT);
  if (loading) {
    return <h1>loading...</h1>;
  }

  if (error) {
    return <h1>{error.message}</h1>;
  }

  if (!data) {
    return <h1>user not found</h1>;
  }
  const rankList = data.getHomePage.totalEvalCntRank;

  return (
    <>
      <VStack>
        {rankList.map((x: any, idx: number) => (
          <div key={idx}>
            {x.userPreview.login}
            {/* {x.userPreview.imgUrl} */}
            //
            {x.value}
          </div>
        ))}
      </VStack>
    </>
  );
};
