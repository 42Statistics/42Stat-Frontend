import { gql } from '@/__generated__';
import type { RankingUserItemType } from '@/types/Ranking';
import { useQuery } from '@apollo/client';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@components/elements/DashboardContentView/Error';
import { RankingUser } from '@components/elements/DashboardContentView/RankingUser';
import { DashboardContent } from '@components/templates/DashboardContent';
import { Mobile, TabletAndAbove } from '@utils/responsive/Device';

const GET_CORRECTION_POINT_RANKING = gql(/* GraphQL */ `
  query GetCorrectionPointRanking($limit: Int!) {
    getHomeUser {
      correctionPointRanking(limit: $limit) {
        userPreview {
          id
          login
          imgUrl
        }
        value
        rank
      }
    }
  }
`);

export const CorrectionPointRanking = () => {
  const title = '보유 평가 포인트 랭킹';
  const { loading, error, data } = useQuery(GET_CORRECTION_POINT_RANKING, {
    variables: { limit: 5 },
  });
  if (loading) return <DashboardContentLoading />;
  if (error) return <DashboardContentBadRequest message={error.message} />;
  if (!data) return <DashboardContentNotFound />;

  const { correctionPointRanking } = data.getHomeUser;

  const unit = '개';

  const list: RankingUserItemType[] = correctionPointRanking.map(
    ({ userPreview, value, rank }) => ({
      id: userPreview.id,
      name: userPreview.login,
      value: value,
      rank: rank,
      imgUrl: userPreview.imgUrl,
    }),
  );

  return (
    <DashboardContent title={title}>
      <TabletAndAbove>
        <RankingUser list={list} cnt={5} unit={unit} />
      </TabletAndAbove>
      <Mobile>
        <RankingUser list={list} cnt={3} unit={unit} />
      </Mobile>
    </DashboardContent>
  );
};
