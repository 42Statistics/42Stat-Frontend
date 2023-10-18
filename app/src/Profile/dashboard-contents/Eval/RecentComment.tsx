import { UserProfileContext } from '@/Profile/contexts/UserProfileContext';
import { useQuery } from '@apollo/client';
import { DashboardContent } from '@shared/components/DashboardContent';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@shared/components/DashboardContentView/Error';
import { TextDefault } from '@shared/components/DashboardContentView/Text/TextDefault';
import { InfoTooltip } from '@shared/components/InfoTooltip';
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
    <>
      {recentComment ? (
        <DashboardContent
          title={title}
          titleRight={<InfoTooltip text="코멘트 : 평가하러 가서 작성한 리뷰" />}
          type="Scrollable"
        >
          <Text>{recentComment}</Text>
        </DashboardContent>
      ) : (
        <DashboardContent
          title={title}
          titleRight={<InfoTooltip text="코멘트 : 평가하러 가서 작성한 리뷰" />}
        >
          <TextDefault text="평가 기록이 없습니다" />
        </DashboardContent>
      )}
    </>
  );
};
