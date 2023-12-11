import { useContext } from 'react';

import { useQuery } from '@apollo/client';

import { DashboardContent } from '@shared/components/DashboardContent';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@shared/components/DashboardContentView/Error';
import { NumberVersus } from '@shared/components/DashboardContentView/Number/NumberVersus';

import { MyUserProfileContext } from '@/Profile/contexts/MyUserProfileContext';
import { UserProfileContext } from '@/Profile/contexts/UserProfileContext';
import { GET_VERSUS_ZERO_COST } from '@/Profile/dashboard-contents-queries/GET_VERSUS_ZERO_COST';

export const Level = () => {
  const myUserProfile = useContext(MyUserProfileContext);
  const userProfile = useContext(UserProfileContext);

  const title = '레벨';
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
    data1: {
      userProfile: { level: myLevel },
    },
    data2: {
      userProfile: { level },
    },
  } = data;

  return (
    <DashboardContent title={title}>
      <NumberVersus
        userProfile1={myUserProfile}
        number1={myLevel}
        userProfile2={userProfile}
        number2={level}
      />
    </DashboardContent>
  );
};
