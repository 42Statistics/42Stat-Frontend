import { gql } from '@/__generated__';
import { Loader } from '@/components/common';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@/components/elements/DashboardContentView';
import { Rank } from '@/components/elements/DashboardContentView/Rank';
import { DashboardContent } from '@/components/templates/Dashboard';
import type { RankItemType } from '@/utils/types/Rank';
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

  if (loading) return <Loader />;
  if (error) return <ApolloBadRequest msg={error.message} />;
  if (!data) return <ApolloNotFound />;

  const { currRegisteredCntRank } = data.getHomePage;
  const title = '지금 가장 많은 사람이 참여하는 과제는?';
  const unit = '명';

  const rankList: RankItemType[] = currRegisteredCntRank.map(
    ({ projectPreview, value }) => ({
      name: projectPreview.name,
      value: value,
    }),
  );

  // FIXME: 유저가 아닌데 showImg={false}를 넣어야만 되는게 적절하지 않음. Rank & RankUser로 분리해야 하나?
  return (
    <DashboardContent title={title}>
      <Rank rankList={rankList} showImg={false} cnt={3} unit={unit} />
    </DashboardContent>
  );
};
