import { VStack } from '@/components/common';
import { gql, useQuery } from '@apollo/client';

const GET_MONTHLY_ACCESS_TIME = gql`
  query {
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
`;
export const MonthlyAccessTimeRank = () => {
  const { loading, error, data } = useQuery(GET_MONTHLY_ACCESS_TIME);
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
