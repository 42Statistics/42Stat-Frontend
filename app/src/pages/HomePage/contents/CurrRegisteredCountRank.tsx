import { gql } from '@/__generated__';
import { useQuery } from '@apollo/client';
import { Loader } from '@components/common';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@components/elements/DashboardContentView';
import { Rank } from '@components/elements/DashboardContentView/Rank';
import { DashboardContent } from '@components/templates/DashboardContent';
import type { RankItemType } from '@utils/types/Rank';

const GET_CURR_REGISTERED_COUNT_RANK = gql(/* GraphQL */ `
  query GetCurrRegisteredCountRank {
    getHomeTeam {
      currRegisteredCountRanking {
        projectPreview {
          id
          name
        }
        value
      }
    }
  }
`);

export const CurrRegisteredCountRank = () => {
  const title = '지금 가장 많은 사람이 참여하는 과제는?';
  const { loading, error, data } = useQuery(GET_CURR_REGISTERED_COUNT_RANK);

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

  const { currRegisteredCountRanking } = data.getHomeTeam;
  const unit = '명';

  const rankList: RankItemType[] = currRegisteredCountRanking.map(
    ({ projectPreview, value }) => ({
      id: projectPreview.id,
      name: projectPreview.name,
      value: value,
    }),
  );

  return (
    <DashboardContent title={title}>
      <Rank rankList={rankList} cnt={3} unit={unit} />
    </DashboardContent>
  );
};
