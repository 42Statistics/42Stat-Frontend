import { gql } from '@/__generated__';
import { useQuery } from '@apollo/client';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@components/elements/DashboardContentView/Error';
import { ProjectRankList } from '@components/elements/DashboardContentView/Rank/ProjectRankList';
import { DashboardContent } from '@components/templates/DashboardContent';
import { Mobile, TabletAndAbove } from '@utils/responsive/Device';

const GET_CURR_REGISTERED_COUNT_RANKING = gql(/* GraphQL */ `
  query GetCurrRegisteredCountRanking($limit: Int!) {
    getHomeTeam {
      currRegisteredCountRanking(limit: $limit) {
        projectPreview {
          ...projectPreviewFields
        }
        rank
        value
      }
    }
  }
`);

export const CurrRegisteredCountRanking = () => {
  const title = '지금 가장 많은 사람이 참여하는 과제는?';
  const { loading, error, data } = useQuery(GET_CURR_REGISTERED_COUNT_RANKING, {
    variables: { limit: 5 },
  });

  if (loading) {
    return <DashboardContentLoading title={title} />;
  }
  if (error) {
    return <DashboardContentBadRequest title={title} message={error.message} />;
  }
  if (!data) {
    return <DashboardContentNotFound title={title} />;
  }

  const { currRegisteredCountRanking } = data.getHomeTeam;
  const unit = '명';

  return (
    <DashboardContent title={title}>
      <TabletAndAbove>
        <ProjectRankList
          list={currRegisteredCountRanking}
          cnt={5}
          unit={unit}
        />
      </TabletAndAbove>
      <Mobile>
        <ProjectRankList
          list={currRegisteredCountRanking}
          cnt={3}
          unit={unit}
        />
      </Mobile>
    </DashboardContent>
  );
};
