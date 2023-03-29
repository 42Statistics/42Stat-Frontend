import { VStack } from '@/components/common';
import { gql } from '@/__generated__';
import { useQuery } from '@apollo/client';

const GET_MONTHLY_ACCESS_TIME_RANK = gql(/* GraphQL */ `
  query GetMonthlyAccessTimeRank {
    getHomePage {
      monthlyAccessTimeRank {
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

export const MonthlyAccessTimeRank = () => {
  const { loading, error, data } = useQuery(GET_MONTHLY_ACCESS_TIME_RANK);

  if (loading) {
    return <h1>loading...</h1>;
  }
  if (error) {
    return <h1>{error.message}</h1>;
  }
  if (!data) {
    return <h1>user not found</h1>;
  }

  const rankList = data.getHomePage.monthlyAccessTimeRank;

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
