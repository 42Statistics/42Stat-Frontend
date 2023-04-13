import { gql } from '@/__generated__';
import { Spinner } from '@/components/common';
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

  if (loading) return <Spinner />;
  if (error) {
    return <h1>{error.message}</h1>;
  }
  if (!data) {
    return <h1>user not found</h1>;
  }

  const { walletRanks } = data.getTotalPage;
  const unit = '₳';

  const rankList: RankItemType[] = walletRanks.map(
    ({ userPreview, value }) => ({
      name: userPreview.login,
      value: value,
      imgUrl: userPreview.imgUrl,
    }),
  );

  const rankListWithoutImgUrl: RankItemType[] = rankList.map(
    ({ name, value }) => ({ name, value }),
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
        <Rank rankList={rankListWithoutImgUrl} cnt={3} unit={unit} />
      </Mobile>
    </>
  );
};
