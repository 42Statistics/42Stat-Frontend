import { gql } from '@/__generated__';
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

const GET_LAST_REGISTERED_BY_LOGIN = gql(/* GraphQL */ `
  query GetLastRegisteredByLogin($login: String!) {
    getPersonalGeneral(login: $login) {
      teamInfo {
        lastRegistered
      }
    }
  }
`);

export const LastRegistered = () => {
  const { username } = useParams() as { username: string };

  const title = '최근 신청한 과제';
  const { loading, error, data } = useQuery(GET_LAST_REGISTERED_BY_LOGIN, {
    variables: { login: username },
  });
  if (loading) return <DashboardContentLoading />;
  if (error) return <DashboardContentBadRequest message={error.message} />;
  if (!data) return <DashboardContentNotFound />;

  const { lastRegistered } = data.getPersonalGeneral.teamInfo;

  return (
    <DashboardContent title={title}>
      {lastRegistered != null ? (
        <TextProject projectName={lastRegistered} />
      ) : (
        <TextDefault text="과제 신청 기록이 없어요 😓" />
      )}
    </DashboardContent>
  );
};
