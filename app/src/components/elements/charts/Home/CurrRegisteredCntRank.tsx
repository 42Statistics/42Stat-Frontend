import { VStack } from '@/components/common';
import { gql, useQuery } from '@apollo/client';

const GET_CURR_REGI_RANK = gql`
  query {
    getHomePage {
      currRegisteredCntRank {
        projectPreview {
          name
        }
        value
      }
    }
  }
`;
export const CurrRegisteredCntRank = () => {
  const { loading, error, data } = useQuery(GET_CURR_REGI_RANK);
  if (loading) {
    return <h1>loading...</h1>;
  }

  if (error) {
    return <h1>{error.message}</h1>;
  }

  if (!data) {
    return <h1>user not found</h1>;
  }
  const rankList = data.getHomePage.currRegisteredCntRank;
  return (
    <>
      <VStack>
        {rankList.map((x: any, idx: number) => (
          <div key={idx}>
            {x.projectPreview.name} {x.value}
          </div>
        ))}
      </VStack>
    </>
  );
};
