import { gql } from '@/__generated__';
import { useQuery } from '@apollo/client';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@components/elements/DashboardContentView/Error';
import { RankingUser } from '@components/elements/DashboardContentView/Ranking/RankingUser';
import { DashboardContent } from '@components/templates/DashboardContent';
import { Mobile, TabletAndAbove } from '@utils/responsive/Device';

const GET_WALLET_RANKING = gql(/* GraphQL */ `
  query GetWalletRanking($limit: Int!) {
    getHomeUser {
      walletRanking(limit: $limit) {
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

export const WalletRanking = () => {
  const title = '보유 월렛 랭킹';
  const { loading, error, data } = useQuery(GET_WALLET_RANKING, {
    variables: { limit: 5 },
  });
  if (loading) return <DashboardContentLoading />;
  if (error) return <DashboardContentBadRequest message={error.message} />;
  if (!data) return <DashboardContentNotFound />;

  const { walletRanking } = data.getHomeUser;
  const unit = '₳';

  const list = walletRanking.map(({ userPreview, value, rank }) => ({
    id: userPreview.id,
    name: userPreview.login,
    value: value,
    rank: rank,
    imgUrl: userPreview.imgUrl,
  }));

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
