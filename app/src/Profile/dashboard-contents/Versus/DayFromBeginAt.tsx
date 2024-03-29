import { useContext } from 'react';

import { useQuery } from '@apollo/client';

import { DashboardContent } from '@shared/components/DashboardContent';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@shared/components/DashboardContentView/Error';
import { NumberVersus } from '@shared/components/DashboardContentView/Number/NumberVersus';
import { getTimeDiffFromNow } from '@shared/utils/getTimeDiffFromNow';

import { GET_VERSUS_ZERO_COST } from '@/Profile/dashboard-contents-queries/GET_VERSUS_ZERO_COST';
import { UserProfileContext } from '@/Profile/contexts/UserProfileContext';
import { MyUserProfileContext } from '@/Profile/contexts/MyUserProfileContext';

export const DayFromBeginAt = () => {
  const myUserProfile = useContext(MyUserProfileContext);
  const userProfile = useContext(UserProfileContext);

  const title = '본과정 시작한지';
  const { loading, error, data } = useQuery(GET_VERSUS_ZERO_COST, {
    variables: { login1: myUserProfile.login, login2: userProfile.login },
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

  const {
    data1: { beginAt: myBeginAt },
    data2: { beginAt },
  } = data;

  const diff = -getTimeDiffFromNow(new Date(beginAt), 'day');
  const myDiff = -getTimeDiffFromNow(new Date(myBeginAt), 'day');
  const unit = '일째';

  return (
    <DashboardContent title={title}>
      <NumberVersus
        userProfile1={myUserProfile}
        number1={myDiff}
        userProfile2={userProfile}
        number2={diff}
        unit={unit}
      />
    </DashboardContent>
  );
};
