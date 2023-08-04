import { MyUserProfileContext } from '@/Profile/contexts/MyUserProfileContext';
import { UserProfileContext } from '@/Profile/contexts/UserProfileContext';
import { useQuery } from '@apollo/client';
import { gql } from '@shared/__generated__';
import { DateTemplate } from '@shared/__generated__/graphql';
import { DashboardContent } from '@shared/components/DashboardContent';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@shared/components/DashboardContentView/Error';
import { NumberVersus } from '@shared/components/DashboardContentView/Number/NumberVersus';
import { useContext } from 'react';

const GET_LOGTIME_BY_DATE_TEMPLATE_VERSUS = gql(/* GraphQL */ `
  query GetLogtimeByDateTemplateVersus(
    $login1: String!
    $login2: String!
    $dateTemplate: DateTemplate!
  ) {
    data1: getPersonalGeneral(login: $login1) {
      logtimeByDateTemplate(dateTemplate: $dateTemplate) {
        data
        start
        end
      }
    }
    data2: getPersonalGeneral(login: $login2) {
      logtimeByDateTemplate(dateTemplate: $dateTemplate) {
        data
        start
        end
      }
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
        dateTemplate: DateTemplate.Total,
      },
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

  const {
    data1: {
      logtimeByDateTemplate: { data: myLogtime },
    },
    data2: {
      logtimeByDateTemplate: { data: logtime },
    },
  } = data;
  const myLogtimeByHours = Math.floor(myLogtime / 60);
  const logtimeByHours = Math.floor(logtime / 60);
  const unit = '시간';

  return (
    <DashboardContent title={title}>
      <NumberVersus
        imgUrl1={myUserProfile.imgUrl}
        number1={myLogtimeByHours}
        imgUrl2={userProfile.imgUrl}
        number2={logtimeByHours}
        unit={unit}
      />
    </DashboardContent>
  );
};
