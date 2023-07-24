import { useQuery } from '@apollo/client';
import { gql } from '@shared/__generated__';
import { DashboardContent } from '@shared/components/DashboardContent';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@shared/components/DashboardContentView/Error';
import { UserRankList } from '@shared/components/DashboardContentView/Rank/UserRankList';
import { Mobile, TabletAndAbove } from '@shared/utils/react-responsive/Device';
import { useParams } from 'react-router-dom';

const GET_DESTINY_RANKING_BY_LOGIN = gql(/* GraphQL */ `
  query GetDestinyRankingByLogin($login: String!, $limit: Int!) {
    getPersonalEval(login: $login) {
      destinyRanking(limit: $limit) {
        userPreview {
          ...userPreviewFields
        }
        value
        rank
      }
    }
  }
`);

export const DestinyRanking = () => {
  const { username } = useParams() as { username: string };

  const title = '인연 스코어';
  const description = `${username}의 여행 동반자들`;
  const { loading, error, data } = useQuery(GET_DESTINY_RANKING_BY_LOGIN, {
    variables: { login: username, limit: 5 },
  });

  if (loading) {
    return <DashboardContentLoading title={title} description={description} />;
  }
  if (error) {
    return (
      <DashboardContentBadRequest
        title={title}
        description={description}
        message={error.message}
      />
    );
  }
  if (!data) {
    return <DashboardContentNotFound title={title} description={description} />;
  }

  const { destinyRanking } = data.getPersonalEval;
  const unit = '점';

  return (
    <DashboardContent title={title} description={description}>
      <TabletAndAbove>
        <UserRankList list={destinyRanking} cnt={5} unit={unit} />
      </TabletAndAbove>
      <Mobile>
        <UserRankList list={destinyRanking} cnt={3} unit={unit} />
      </Mobile>
    </DashboardContent>
  );
};
