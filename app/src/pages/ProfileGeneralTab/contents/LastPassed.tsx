import { useQuery } from '@apollo/client';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@components/elements/DashboardContentView/Error';
import { TextDefault } from '@components/elements/DashboardContentView/Text/TextDefault';
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
  if (loading) return <DashboardContentLoading />;
  if (error) return <DashboardContentBadRequest message={error.message} />;
  if (!data) return <DashboardContentNotFound />;

  const { lastPassed } = data.getPersonalGeneral.teamInfo;

  return (
    <DashboardContent title={title}>
      {lastPassed != null ? (
        <TextProject projectName={lastPassed} />
      ) : (
        <TextDefault text="과제 제출 기록이 없어요 😓" />
      )}
    </DashboardContent>
  );
};
