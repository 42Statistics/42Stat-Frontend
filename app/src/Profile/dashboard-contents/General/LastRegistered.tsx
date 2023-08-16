import { UserProfileContext } from '@/Profile/contexts/UserProfileContext';
import { useQuery } from '@apollo/client';
import { DashboardContent } from '@shared/components/DashboardContent';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
  NoneDash,
} from '@shared/components/DashboardContentView/Error';
import { TextDefault } from '@shared/components/DashboardContentView/Text/TextDefault';
import { ROUTES } from '@shared/constants/ROUTES';
import { useContext } from 'react';
import { GET_PERSONAL_GENERAL_ZERO_COST_BY_LOGIN } from '../../dashboard-contents-queries/GET_PERSONAL_GENERAL_ZERO_COST_BY_LOGIN';

export const LastRegistered = () => {
  const { login } = useContext(UserProfileContext);

  const title = '최근 신청한 과제';
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

  const { lastRegistered } = data.getPersonalGeneral.teamInfo;

  return (
    <DashboardContent title={title}>
      {lastRegistered != null ? (
        <TextDefault
          text={lastRegistered.projectPreview.name}
          link={ROUTES.TEAM_OF(lastRegistered.id)}
        />
      ) : (
        <NoneDash />
      )}
    </DashboardContent>
  );
};
