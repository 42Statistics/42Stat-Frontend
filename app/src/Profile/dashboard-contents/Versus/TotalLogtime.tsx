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

import { UserProfileContext } from '@/Profile/contexts/UserProfileContext';
import { MyUserProfileContext } from '@/Profile/contexts/MyUserProfileContext';

const GET_LOGTIME_BY_DATE_TEMPLATE_VERSUS = gql(/* GraphQL */ `
  query GetTotalLogtimeVersus($login1: String!, $login2: String!) {
    data1: getPersonalVersus(login: $login1) {
      totalLogtime
    }
    data2: getPersonalVersus(login: $login2) {
      totalLogtime
    }
  }
`);

export const TotalLogtime = () => {
  const myUserProfile = useContext(MyUserProfileContext);
  const userProfile = useContext(UserProfileContext);

  const title = '누적 접속 시간';
  const { loading, error, data } = useQuery(
    GET_LOGTIME_BY_DATE_TEMPLATE_VERSUS,
    {
      variables: {
        login1: myUserProfile.login,
        login2: userProfile.login,
      },
    },
  );

  if (loading) {
    return <DashboardContentLoading title={title} />;
  }
  if (error) {
    return <DashboardContentBadRequest title={title} message={error.message} />;
  }
  if (!data || !data.data1 || !data.data2) {
    return <DashboardContentNotFound title={title} />;
  }

  const {
    data1: { totalLogtime: myLogtime },
    data2: { totalLogtime: logtime },
  } = data;
  const myLogtimeByHours = Math.floor(myLogtime / 60);
  const logtimeByHours = Math.floor(logtime / 60);
  const unit = '시간';

  return (
    <DashboardContent title={title}>
      <NumberVersus
        userProfile1={myUserProfile}
        number1={myLogtimeByHours}
        userProfile2={userProfile}
        number2={logtimeByHours}
        unit={unit}
      />
    </DashboardContent>
  );
};
