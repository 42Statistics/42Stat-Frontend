import { UserProfileContext } from '@/Profile/contexts/UserProfileContext';
import { useQuery } from '@apollo/client';
import { DashboardContent } from '@shared/components/DashboardContent';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@shared/components/DashboardContentView/Error';
import { Text } from '@shared/ui-kit';
import { useContext } from 'react';
import { GET_PERSONAL_EVAL_ZERO_COST_BY_LOGIN } from '../../dashboard-contents-queries/GET_PERSONAL_EVAL_ZERO_COST_BY_LOGIN';

export const RecentComment = () => {
  const { login } = useContext(UserProfileContext);

  const title = '최근 쓴 코멘트';
  const { loading, error, data } = useQuery(
    GET_PERSONAL_EVAL_ZERO_COST_BY_LOGIN,
    {
      variables: { login },
    },
  );

  if (loading) {
    return <DashboardContentLoading title={title} />;
  }
  if (error) {
    return <DashboardContentBadRequest title={title} message={error.message} />;
  }
  if (!data) {
    return <DashboardContentNotFound title={title} />;
  }

  const { recentComment } = data.getPersonalEval; // FIXME: null일 수 있음.

  return (
    <DashboardContent title={title} type="Scrollable">
      <Text>{recentComment}</Text>
    </DashboardContent>
  );
};
