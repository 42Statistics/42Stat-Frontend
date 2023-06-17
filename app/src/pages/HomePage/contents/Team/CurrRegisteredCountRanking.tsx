import { gql } from '@/__generated__';
import { useQuery } from '@apollo/client';
import { Loader } from '@components/common';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@components/elements/DashboardContentView/Error';
import { RankDefault } from '@components/elements/DashboardContentView/RankDefault';
import { DashboardContent } from '@components/templates/DashboardContent';
import type { RankItemType } from '@utils/types/Rank';

const GET_CURR_REGISTERED_COUNT_RANKING = gql(/* GraphQL */ `
  query GetCurrRegisteredCountRanking {
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

export const CurrRegisteredCountRanking = () => {
  const title = '지금 가장 많은 사람이 참여하는 과제는?';
  const { loading, error, data } = useQuery(GET_CURR_REGISTERED_COUNT_RANKING);

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
    ({ projectPreview, value }, idx) => ({
      id: projectPreview.id,
      name: projectPreview.name,
      value: value,
      rank: idx + 1,
    }),
  );

  return (
    <DashboardContent title={title}>
      <RankDefault rankList={rankList} cnt={3} unit={unit} />
    </DashboardContent>
  );
};
