import { Spinner } from '@/components/common';
import { Rank } from '@/components/elements/DashboardContentView/Rank';
import { RankItemType } from '@/utils/types/Rank';
import { gql } from '@/__generated__';
import { useQuery } from '@apollo/client';

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

  if (loading) return <Spinner />;
  if (error) {
    return <h1>{error.message}</h1>;
  }
  if (!data) {
    return <h1>user not found</h1>;
  }

  const { currRegisteredCntRank } = data.getHomePage;

  const rankList: RankItemType[] = currRegisteredCntRank.map(
    ({ projectPreview, value }) => ({
      name: projectPreview.name,
      value: value,
    }),
  );

  return <Rank rankList={rankList} cnt={3} unit="명" />;
};
