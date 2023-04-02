import { Spinner } from '@/components/common';
import { Rank } from '@/components/elements/DashboardContentView/Rank';
import { RankItemType } from '@/utils/types/Rank';
import { gql } from '@/__generated__';
import { useQuery } from '@apollo/client';

const GET_CORRECTION_POINT_RANK = gql(/* GraphQL */ `
  query getCorrectionPointRank {
    getTotalPage {
      correctionPointRanks {
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

export const CorrectionPointRanks = () => {
  const { loading, error, data } = useQuery(GET_CORRECTION_POINT_RANK);

  if (loading) return <Spinner />;
  if (error) {
    return <h1>{error.message}</h1>;
  }
  if (!data) {
    return <h1>user not found</h1>;
  }

  const { correctionPointRanks } = data.getTotalPage;

  const rankList: RankItemType[] = correctionPointRanks.map(
    ({ userPreview, value }) => ({
      id: userPreview.id,
      name: userPreview.login,
      value: value,
      imgUrl: userPreview.imgUrl,
    }),
  );

  return <Rank rankList={rankList} cnt={3} unit="개" />;
};
