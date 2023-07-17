import { useQuery } from '@apollo/client';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@components/elements/DashboardContentView/Error';
import { UserRankList } from '@components/elements/DashboardContentView/Rank/UserRankList';
import { DashboardContent } from '@components/templates/DashboardContent';
import { Mobile, TabletAndAbove } from '@utils/responsive/Device';
import { useParams } from 'react-router-dom';
import { GET_PERSONAL_EVAL_BY_LOGIN } from '../GET_PERSONAL_EVAL_BY_LOGIN';

export const DestinyRanking = () => {
  const { username } = useParams() as { username: string };

  const title = '인연 스코어';
  const description = `${username}의 여행 동반자들`;
  const { loading, error, data } = useQuery(GET_PERSONAL_EVAL_BY_LOGIN, {
    variables: { login: username },
  });
  if (loading)
    return <DashboardContentLoading title={title} description={description} />;
  if (error)
    return (
      <DashboardContentBadRequest
        title={title}
        description={description}
        message={error.message}
      />
    );
  if (!data)
    return <DashboardContentNotFound title={title} description={description} />;

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
