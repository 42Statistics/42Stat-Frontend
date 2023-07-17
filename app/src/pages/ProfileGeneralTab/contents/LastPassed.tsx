import { useQuery } from '@apollo/client';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
  NoneDash,
} from '@components/elements/DashboardContentView/Error';
import { TextProject } from '@components/elements/DashboardContentView/Text/TextProject';
import { DashboardContent } from '@components/templates/DashboardContent';
import { useParams } from 'react-router-dom';
import { GET_PERSONAL_GENERAL_BY_LOGIN } from '../GET_PERSONAL_GENERAL_BY_LOGIN';

export const LastPassed = () => {
  const { username } = useParams() as { username: string };

  const title = '최근 통과한 과제';
  const { loading, error, data } = useQuery(GET_PERSONAL_GENERAL_BY_LOGIN, {
    variables: { login: username },
  });
  if (loading) return <DashboardContentLoading title={title} />;
  if (error)
    return <DashboardContentBadRequest title={title} message={error.message} />;
  if (!data) return <DashboardContentNotFound title={title} />;

  const { lastPassed } = data.getPersonalGeneral.teamInfo;

  return (
    <DashboardContent title={title}>
      {lastPassed != null ? (
        <TextProject projectName={lastPassed} />
      ) : (
        <NoneDash />
      )}
    </DashboardContent>
  );
};
