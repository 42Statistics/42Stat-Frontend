import { gql } from '@/__generated__';
import { Rank } from '@/components/elements/DashboardContentView/Rank';
import { useQuery } from '@apollo/client';
import { RankItemType } from '@/utils/types/Rank';

const GET_CURR_REGISTERED_CNT_RANK = gql(/* GraphQL */ `
  query GetCurrRegisteredCntRank {
    getHomePage {
      currRegisteredCntRank {
        projectPreview {
          name
        }
        value
      }
    }
  }
`);

export const CurrRegisteredCntRank = () => {
  const { loading, error, data } = useQuery(GET_CURR_REGISTERED_CNT_RANK);

  if (loading) {
    return <h1>loading...</h1>;
  }
  if (error) {
    return <h1>{error.message}</h1>;
  }
  if (!data) {
    return <h1>user not found</h1>;
  }

  const rankList: RankItemType[] = data.getHomePage.currRegisteredCntRank.map(
    ({ projectPreview, value }) => ({
      name: projectPreview.name,
      value: value,
    }),
  );

  return (
    <>
      <Rank rankList={rankList} cnt={3} unit="명" />
    </>
  );
};
