import { VStack } from '@/components/common';
import { gql } from '@/__generated__';
import { useQuery } from '@apollo/client';

const GET_TOTAL_EVAL_CNT_RANK = gql(/* GraphQL */ `
  query GetTotalEvalCntRank {
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
`);

export const TotalEvalCntRank = () => {
  const { loading, error, data } = useQuery(GET_TOTAL_EVAL_CNT_RANK);

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
        {rankList.map(({ userPreview, value }, idx) => (
          <div key={idx}>
            {userPreview.login}/{userPreview.imgUrl}/{value}
          </div>
        ))}
      </VStack>
    </>
  );
};
