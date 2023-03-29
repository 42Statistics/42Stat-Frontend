import { gql } from '@/__generated__';
import { Rank } from '@/components/elements/ranks/Rank';
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

  const rankList: RankList[] = data.getHomePage.totalEvalCntRank.map(
    ({ userPreview, value }, idx): RankList => ({
      id: userPreview.id,
      name: userPreview.login,
      value: value,
      imgUrl: userPreview.imgUrl,
    }),
  );
  return (
    <>
      <Rank rankList={rankList} cnt={3} unit="회" />
    </>
  );
};
