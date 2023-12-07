import { useContext } from 'react';

import { useQuery } from '@apollo/client';

import { DashboardContent } from '@shared/components/DashboardContent';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
  NoneDash,
} from '@shared/components/DashboardContentView/Error';
import { TextDefault } from '@shared/components/DashboardContentView/Text/TextDefault';
import { ROUTES } from '@shared/constants/routes';

import { GET_PERSONAL_GENERAL_ZERO_COST_BY_LOGIN } from '@/Profile/dashboard-contents-queries/GET_PERSONAL_GENERAL_ZERO_COST_BY_LOGIN';
import { UserProfileContext } from '@/Profile/contexts/UserProfileContext';

export const LastPassed = () => {
  const { login } = useContext(UserProfileContext);

  const title = '최근 통과한 과제';
  const { loading, error, data } = useQuery(
    GET_PERSONAL_GENERAL_ZERO_COST_BY_LOGIN,
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

  const { lastPassed } = data.getPersonalGeneral.teamInfo;

  return (
    <DashboardContent title={title}>
      {lastPassed != null ? (
        <TextDefault
          text={lastPassed.projectPreview.name}
          link={ROUTES.TEAM_OF(lastPassed.id)}
        />
      ) : (
        <NoneDash />
      )}
    </DashboardContent>
  );
};
