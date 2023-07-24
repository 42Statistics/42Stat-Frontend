import { useQuery } from '@apollo/client';
import { DashboardContent } from '@shared/components/DashboardContent';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
  NoneDash,
} from '@shared/components/DashboardContentView/Error';
import { TextProject } from '@shared/components/DashboardContentView/Text/TextProject';
import { useParams } from 'react-router-dom';
import { GET_PERSONAL_GENERAL_ZERO_COST_BY_LOGIN } from '../queries/GET_PERSONAL_GENERAL_ZERO_COST_BY_LOGIN';

export const LastRegistered = () => {
  const { username } = useParams() as { username: string };

  const title = '최근 신청한 과제';
  const { loading, error, data } = useQuery(
    GET_PERSONAL_GENERAL_ZERO_COST_BY_LOGIN,
    {
      variables: { login: username },
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
        <TextProject projectName={lastRegistered} />
      ) : (
        <NoneDash />
      )}
    </DashboardContent>
  );
};
