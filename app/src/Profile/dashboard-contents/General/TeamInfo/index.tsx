import { UserProfileContext } from '@/Profile/contexts/UserProfileContext';
import { useQuery } from '@apollo/client';
import styled from '@emotion/styled';
import { gql } from '@shared/__generated__';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@shared/components/DashboardContentView/Error';
import { useContext } from 'react';
import { TeamInfoTable } from './TeamInfoTable';

const GET_TEAM_INFO_BY_LOGIN = gql(/* GraphQL */ `
  query GetTeamInfoByLogin($login: String!) {
    getPersonalGeneral(login: $login) {
      teamInfo {
        teams {
          id
          name
          occurrence
          projectPreview {
            ...projectPreviewFields
          }
          status
          lastEventTime
          isValidated
          finalMark
        }
      }
    }
  }
`);

export const TeamInfo = () => {
  const { login } = useContext(UserProfileContext);

  const { loading, error, data } = useQuery(GET_TEAM_INFO_BY_LOGIN, {
    variables: { login },
  });

  if (loading) {
    return <DashboardContentLoading />;
  }
  if (error) {
    return <DashboardContentBadRequest message={error.message} />;
  }
  if (!data) {
    return <DashboardContentNotFound />;
  }

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
