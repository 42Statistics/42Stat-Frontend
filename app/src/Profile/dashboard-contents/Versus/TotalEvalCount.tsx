import { MyUserProfileContext } from '@/Profile/contexts/MyUserProfileContext';
import { UserProfileContext } from '@/Profile/contexts/UserProfileContext';
import { useQuery } from '@apollo/client';
import { gql } from '@shared/__generated__';
import { DashboardContent } from '@shared/components/DashboardContent';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@shared/components/DashboardContentView/Error';
import { NumberVersus } from '@shared/components/DashboardContentView/Number/NumberVersus';
import { useContext } from 'react';

const GET_TOTAL_EVAL_COUNT_VERSUS = gql(/* GraphQL */ `
  query GetTotalEvalCountVersus($login1: String!, $login2: String!) {
    data1: getPersonalVersus(login: $login1) {
      totalEvalCountRankWithTotal {
        value
      }
    }
    data2: getPersonalVersus(login: $login2) {
      totalEvalCountRankWithTotal {
        value
      }
    }
  }
`);

export const TotalEvalCount = () => {
  const myUserProfile = useContext(MyUserProfileContext);
  const userProfile = useContext(UserProfileContext);

  const title = '누적 평가 횟수';
  const { loading, error, data } = useQuery(GET_TOTAL_EVAL_COUNT_VERSUS, {
    variables: {
      login1: myUserProfile.login,
      login2: userProfile.login,
    },
  });

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
    data1: {
      totalEvalCountRankWithTotal: { value: myCount },
    },
    data2: {
      totalEvalCountRankWithTotal: { value: count },
    },
  } = data;
  const unit = '회';

  return (
    <DashboardContent title={title}>
      <NumberVersus
        imgUrl1={myUserProfile.imgUrl}
        number1={myCount}
        imgUrl2={userProfile.imgUrl}
        number2={count}
        unit={unit}
      />
    </DashboardContent>
  );
};
