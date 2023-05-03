import { gql } from '@/__generated__';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@/components/elements/DashboardContentView';
import { Rank } from '@/components/elements/DashboardContentView/Rank';
import { Desktop, Mobile, Tablet } from '@/utils/responsive/Device';
import { RankItemType } from '@/utils/types/Rank';
import { useQuery } from '@apollo/client';

const GET_WALLET_RANK = gql(/* GraphQL */ `
  query getWalletRank {
    getTotalPage {
      walletRanks {
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
  const { loading, error, data } = useQuery(GET_WALLET_RANK);

  if (loading) return <></>;
  if (error) return <ApolloBadRequest msg={error.message} />;
  if (!data) return <ApolloNotFound />;

  const { walletRanks } = data.getTotalPage;
  const unit = '₳';

  const rankList: RankItemType[] = walletRanks.map(
    ({ userPreview, value }) => ({
      name: userPreview.login,
      value: value,
      imgUrl: userPreview.imgUrl,
    }),
  );

  return (
    <>
      <Desktop>
        <Rank rankList={rankList} cnt={3} unit={unit} />
      </Desktop>
      <Tablet>
        <Rank rankList={rankList} cnt={5} unit={unit} />
      </Tablet>
      <Mobile>
        <Rank rankList={rankList} showImg={false} cnt={3} unit={unit} />
      </Mobile>
    </>
  );
};
