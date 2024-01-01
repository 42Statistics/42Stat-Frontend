import { useContext } from 'react';

import { useQuery } from '@apollo/client';

import { gql } from '@shared/__generated__';
import { DashboardContent } from '@shared/components/DashboardContent';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@shared/components/DashboardContentView/Error';
import { NumberDefault } from '@shared/components/DashboardContentView/Number/NumberDefault';
import { IconTooltip } from '@shared/ui-kit/Tooltip/IconTooltip';

import { UserProfileContext } from '@/Profile/contexts/UserProfileContext';

const GET_AVERAGE_COMMENT_LENGTH_BY_LOGIN = gql(/* GraphQL */ `
  query GetAverageCommentLengthByLogin($login: String!) {
    getPersonalEval(login: $login) {
      averageCommentLength
    }
  }
`);

export const AverageCommentLength = () => {
  const { login } = useContext(UserProfileContext);

  const title = '평균 코멘트 글자수';
  const { loading, error, data } = useQuery(
    GET_AVERAGE_COMMENT_LENGTH_BY_LOGIN,
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

  const { averageCommentLength } = data.getPersonalEval;
  const unit = '자';

  return (
    <DashboardContent
      title={title}
      titleRight={<IconTooltip text="코멘트 : 평가하러 가서 작성한 리뷰" />}
    >
      <NumberDefault number={averageCommentLength} unit={unit} />
    </DashboardContent>
  );
};
