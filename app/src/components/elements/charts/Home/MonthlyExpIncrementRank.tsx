import { VStack } from '@/components/common';
import { gql, useQuery } from '@apollo/client';

const GET_MONTLHLY_EXP_RANK = gql`
  query {
    getHomePage {
      monthlyExpIncrementRank {
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
export const MonthlyExpIncrementRank = () => {
  const { loading, error, data } = useQuery(GET_MONTLHLY_EXP_RANK);
  if (loading) {
    return <h1>loading...</h1>;
  }

  if (error) {
    return <h1>{error.message}</h1>;
  }

  if (!data) {
    return <h1>user not found</h1>;
  }
  const rankList = data.getHomePage.monthlyExpIncrementRank;

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
