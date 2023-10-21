import { useQuery } from '@apollo/client';
import { useContext } from 'react';

import { MyUserProfileContext } from '@/Profile/contexts/MyUserProfileContext';
import { UserProfileContext } from '@/Profile/contexts/UserProfileContext';
import { gql } from '@shared/__generated__';
import { DashboardContent } from '@shared/components/DashboardContent';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@shared/components/DashboardContentView/Error';
import { NumberVersus } from '@shared/components/DashboardContentView/Number/NumberVersus';

const GET_AVERAGE_FINAL_MARK_VERSUS = gql(/* GraphQL */ `
  query GetAverageFinalMarkVersus($login1: String!, $login2: String!) {
    data1: getPersonalEval(login: $login1) {
      averageFinalMark
    }
    data2: getPersonalEval(login: $login2) {
      averageFinalMark
    }
  }
`);

export const AverageFinalMark = () => {
  const myUserProfile = useContext(MyUserProfileContext);
  const userProfile = useContext(UserProfileContext);

  const title = '평균 평가 점수';
  const description = '평가자일 때';
  const { loading, error, data } = useQuery(GET_AVERAGE_FINAL_MARK_VERSUS, {
    variables: { login1: myUserProfile.login, login2: userProfile.login },
  });

  if (loading) {
    return <DashboardContentLoading title={title} description={description} />;
  }
  if (error) {
    return (
      <DashboardContentBadRequest title={title} description={description} />
    );
  }
  if (!data) {
    return <DashboardContentNotFound title={title} description={description} />;
  }

  const {
    data1: { averageFinalMark: myAverageFinalMark },
    data2: { averageFinalMark },
  } = data;
  const unit = '점';

  return (
    <DashboardContent title={title} description={description}>
      <NumberVersus
        imgUrl1={myUserProfile.imgUrl}
        number1={myAverageFinalMark}
        imgUrl2={userProfile.imgUrl}
        number2={averageFinalMark}
        unit={unit}
      />
    </DashboardContent>
  );
};
