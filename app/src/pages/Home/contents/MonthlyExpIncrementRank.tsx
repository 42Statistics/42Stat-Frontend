import { VStack } from '@/components/common';
import { gql } from '@/__generated__';
import { useQuery } from '@apollo/client';

const GET_MONTHLY_EXP_INCREMENT_RANK = gql(/* GraphQL */ `
  query GetMonthlyExpIncrementRank {
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
`);

export const MonthlyExpIncrementRank = () => {
  const { loading, error, data } = useQuery(GET_MONTHLY_EXP_INCREMENT_RANK);

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
        {rankList.map(({ userPreview, value }, idx) => (
          <div key={idx}>
            {userPreview.login}/{userPreview.imgUrl}/{value}
          </div>
        ))}
      </VStack>
    </>
  );
};
