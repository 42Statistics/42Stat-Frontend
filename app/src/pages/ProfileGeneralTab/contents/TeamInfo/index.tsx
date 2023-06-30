import { gql } from '@/__generated__';
import { useQuery } from '@apollo/client';
import { Loader } from '@components/common';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@components/elements/DashboardContentView/Error';
import styled from '@emotion/styled';
import { useParams } from 'react-router-dom';
import { TeamInfoTable } from './TeamInfoTable';

const GET_TEAM_INFO_BY_LOGIN = gql(/* GraphQL */ `
  query GetTeamInfoByLogin($login: String!) {
    getPersonalGeneral(login: $login) {
      teamInfo {
        lastRegistered
        lastPassed
        teams {
          id
          name
          occurrence
          projectPreview {
            id
            name
            url
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
  const { username } = useParams() as { username: string };

  const { loading, error, data } = useQuery(GET_TEAM_INFO_BY_LOGIN, {
    variables: { login: username },
  });

  if (loading) return <Loader />;
  if (error) return <ApolloBadRequest msg={error.message} />;
  if (!data) return <ApolloNotFound />;

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
