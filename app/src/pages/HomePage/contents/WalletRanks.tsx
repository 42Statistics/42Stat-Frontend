import { gql } from '@/__generated__';
import { useQuery } from '@apollo/client';
import { Loader } from '@components/common';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@components/elements/DashboardContentView';
import { RankUser } from '@components/elements/DashboardContentView/Rank';
import { DashboardContent } from '@components/templates/DashboardContent';
import { Mobile, TabletAndAbove } from '@utils/responsive/Device';
import type { RankUserItemType } from '@utils/types/Rank';

const GET_WALLET_RANK = gql(/* GraphQL */ `
  query getWalletRank($limit: Int!) {
    getHomeUser {
      walletRanking(limit: $limit) {
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

export const WalletRanks = () => {
  const title = '보유 월렛 랭킹';
  const { loading, error, data } = useQuery(GET_WALLET_RANK, {
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

  const { walletRanks } = data.getHomeUser;
  const unit = '₳';

  const rankList: RankUserItemType[] = walletRanks.map(
    ({ userPreview, value }) => ({
      id: userPreview.id,
      name: userPreview.login,
      value: value,
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
