import { useQuery } from '@apollo/client';
import { gql } from '@shared/__generated__';
import { DashboardContent } from '@shared/components/DashboardContent';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@shared/components/DashboardContentView/Error';
import { UserRankList } from '@shared/components/DashboardContentView/Rank/UserRankList';

const GET_WALLET_RANKING = gql(/* GraphQL */ `
  query GetWalletRanking($limit: Int!) {
    getHomeUser {
      walletRanking(limit: $limit) {
        userPreview {
          ...userPreviewFields
        }
        value
        rank
      }
    }
  }
`);

export const WalletRanking = () => {
  const title = '보유 월렛 랭킹';
  const { loading, error, data } = useQuery(GET_WALLET_RANKING, {
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

  const { walletRanking } = data.getHomeUser;
  const unit = '₳';

  return (
    <DashboardContent title={title}>
      <UserRankList list={walletRanking} cnt={5} unit={unit} />
    </DashboardContent>
  );
};
