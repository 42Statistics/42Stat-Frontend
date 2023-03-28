import { VStack } from '@/components/common';
import { gql, useQuery } from '@apollo/client';

const GET_LEVEL_RANK = gql`
  query {
    getHomePage {
      levelRank {
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
export const LevelRank = () => {
  const { loading, error, data } = useQuery(GET_LEVEL_RANK);
  if (loading) {
    return <h1>loading...</h1>;
  }

  if (error) {
    return <h1>{error.message}</h1>;
  }

  if (!data) {
    return <h1>user not found</h1>;
  }
  const rankList = data.getHomePage.levelRank;

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
