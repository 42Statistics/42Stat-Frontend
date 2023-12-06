import { useQuery } from '@apollo/client';
import { useContext } from 'react';

import { UserProfileContext } from '@/Profile/contexts/UserProfileContext';
import { gql } from '@shared/__generated__';
import { DashboardContent } from '@shared/components/DashboardContent';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@shared/components/DashboardContentView/Error';
import { NumberDefault } from '@shared/components/DashboardContentView/Number/NumberDefault';
import { CustomTooltip } from '@shared/components/CustomTooltip';

const GET_AVERAGE_FEEDBACK_LENGTH_BY_LOGIN = gql(/* GraphQL */ `
  query GetAverageFeedbackLengthByLogin($login: String!) {
    getPersonalEval(login: $login) {
      averageFeedbackLength
    }
  }
`);

export const AverageFeedbackLength = () => {
  const { login } = useContext(UserProfileContext);

  const title = '평균 피드백 글자수';
  const { loading, error, data } = useQuery(
    GET_AVERAGE_FEEDBACK_LENGTH_BY_LOGIN,
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

  const { averageFeedbackLength } = data.getPersonalEval;
  const unit = '자';

  return (
    <DashboardContent
      title={title}
      titleRight={<CustomTooltip text="피드백 : 평가받고 나서 작성한 리뷰" />}
    >
      <NumberDefault number={averageFeedbackLength} unit={unit} />
    </DashboardContent>
  );
};
