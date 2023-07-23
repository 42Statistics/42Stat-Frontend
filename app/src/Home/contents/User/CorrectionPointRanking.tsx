import { useQuery } from '@apollo/client';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@components/elements/DashboardContentView/Error';
import { UserRankList } from '@components/elements/DashboardContentView/Rank/UserRankList';
import { DashboardContent } from '@components/templates/DashboardContent';
import { gql } from '@shared/__generated__';
import { Mobile, TabletAndAbove } from '@shared/utils/responsive/Device';

const GET_CORRECTION_POINT_RANKING = gql(/* GraphQL */ `
  query GetCorrectionPointRanking($limit: Int!) {
    getHomeUser {
      correctionPointRanking(limit: $limit) {
        userPreview {
          ...userPreviewFields
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
  if (loading) {
    return <DashboardContentLoading title={title} />;
  }
  if (error) {
    return <DashboardContentBadRequest title={title} message={error.message} />;
  }
  if (!data) {
    return <DashboardContentNotFound title={title} />;
  }

  const { correctionPointRanking } = data.getHomeUser;
  const unit = '개';

  return (
    <DashboardContent title={title}>
      <TabletAndAbove>
        <UserRankList list={correctionPointRanking} cnt={5} unit={unit} />
      </TabletAndAbove>
      <Mobile>
        <UserRankList list={correctionPointRanking} cnt={3} unit={unit} />
      </Mobile>
    </DashboardContent>
  );
};
