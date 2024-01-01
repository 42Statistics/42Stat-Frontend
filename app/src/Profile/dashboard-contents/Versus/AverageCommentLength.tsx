import { useContext } from 'react';

import { useQuery } from '@apollo/client';

import { gql } from '@shared/__generated__';
import { DashboardContent } from '@shared/components/DashboardContent';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@shared/components/DashboardContentView/Error';
import { NumberVersus } from '@shared/components/DashboardContentView/Number/NumberVersus';
import { IconTooltip } from '@shared/ui-kit/Tooltip/IconTooltip';

import { UserProfileContext } from '@/Profile/contexts/UserProfileContext';
import { MyUserProfileContext } from '@/Profile/contexts/MyUserProfileContext';

const GET_AVERAGE_COMMENT_LENGTH_VERSUS = gql(/* GraphQL */ `
  query GetAverageCommentLengthVersus($login1: String!, $login2: String!) {
    data1: getPersonalEval(login: $login1) {
      averageCommentLength
    }
    data2: getPersonalEval(login: $login2) {
      averageCommentLength
    }
  }
`);

export const AverageCommentLength = () => {
  const myUserProfile = useContext(MyUserProfileContext);
  const userProfile = useContext(UserProfileContext);

  const title = '평균 코멘트 글자수';
  const { loading, error, data } = useQuery(GET_AVERAGE_COMMENT_LENGTH_VERSUS, {
    variables: { login1: myUserProfile.login, login2: userProfile.login },
  });

  if (loading) {
    return <DashboardContentLoading title={title} />;
  }
  if (error) {
    return <DashboardContentBadRequest title={title} />;
  }
  if (!data) {
    return <DashboardContentNotFound title={title} />;
  }

  const {
    data1: { averageCommentLength: myAverageCommentLength },
    data2: { averageCommentLength },
  } = data;
  const unit = '자';

  return (
    <DashboardContent
      title={title}
      titleRight={<IconTooltip text="코멘트 : 평가하러 가서 작성한 리뷰" />}
    >
      <NumberVersus
        userProfile1={myUserProfile}
        number1={myAverageCommentLength}
        userProfile2={userProfile}
        number2={averageCommentLength}
        unit={unit}
      />
    </DashboardContent>
  );
};
