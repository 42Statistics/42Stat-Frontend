import { gql } from '@/__generated__';
import { useQuery } from '@apollo/client';
import { Loader } from '@components/common';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@components/elements/DashboardContentView/Error';
import { RankUser } from '@components/elements/DashboardContentView/RankUser';
import { DashboardContent } from '@components/templates/DashboardContent';
import { Mobile, TabletAndAbove } from '@utils/responsive/Device';
import type { RankUserItemType } from '@utils/types/Rank';

const GET_WALLET_RANKING = gql(/* GraphQL */ `
  query getWalletRanking($limit: Int!) {
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
  if (loading)
    return (
      <DashboardContent title={title}>
        <Loader />
      </DashboardContent>
    );
  if (error)
    return (
      <DashboardContent title={title}>
        <ApolloBadRequest msg={error.message} />
      </DashboardContent>
    );
  if (!data)
    return (
      <DashboardContent title={title}>
        <ApolloNotFound />
      </DashboardContent>
    );

  const { walletRanking } = data.getHomeUser;
  const unit = '₳';

  const rankList: RankUserItemType[] = walletRanking.map(
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
        <RankUser rankList={rankList} cnt={5} unit={unit} />
      </TabletAndAbove>
      <Mobile>
        <RankUser rankList={rankList} cnt={3} unit={unit} />
      </Mobile>
    </DashboardContent>
  );
};
