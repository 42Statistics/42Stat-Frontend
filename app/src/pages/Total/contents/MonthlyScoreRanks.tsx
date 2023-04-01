import { gql } from '@/__generated__';
import { Spinner } from '@/components/common';
import { Rank } from '@/components/elements/DashboardContentView/Rank';
import { RankItemType } from '@/utils/types/Rank';
import { useQuery } from '@apollo/client';

const GET_COALITION_SCORE_RANK = gql(/* GraphQL */ `
  query getCoalitionScoreRank {
    getTotalPage {
      monthlyScoreRanks {
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

export const MonthlyScoreRanks = () => {
  const { loading, error, data } = useQuery(GET_COALITION_SCORE_RANK);

  if (loading) return <Spinner />;
  if (error) {
    return <h1>{error.message}</h1>;
  }
  if (!data) {
    return <h1>user not found</h1>;
  }

  const rankList: RankItemType[] = data.getTotalPage.monthlyScoreRanks.map(
    ({ userPreview, value }) => ({
      id: userPreview.id,
      name: userPreview.login,
      value: value,
      imgUrl: userPreview.imgUrl,
    }),
  );
  return <Rank rankList={rankList} cnt={3} unit="P" />;
};
