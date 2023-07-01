import { useQuery } from '@apollo/client';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@components/elements/DashboardContentView/Error';
import styled from '@emotion/styled';
import { GET_PERSONAL_GENERAL_BY_LOGIN } from '@pages/ProfileGeneralTab/GET_PERSONAL_GENERAL_BY_LOGIN';
import { useParams } from 'react-router-dom';
import { TeamInfoTable } from './TeamInfoTable';

export const TeamInfo = () => {
  const { username } = useParams() as { username: string };

  const { loading, error, data } = useQuery(GET_PERSONAL_GENERAL_BY_LOGIN, {
    variables: { login: username },
  });

  if (loading) return <DashboardContentLoading />;
  if (error) return <DashboardContentBadRequest message={error.message} />;
  if (!data) return <DashboardContentNotFound />;

  const { teams } = data.getPersonalGeneral.teamInfo;

  return (
    <TeamInfoLayout>
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          overflow: 'auto',
        }}
      >
        <TeamInfoTable teams={teams} />
      </div>
    </TeamInfoLayout>
  );
};

const TeamInfoLayout = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem;
`;
