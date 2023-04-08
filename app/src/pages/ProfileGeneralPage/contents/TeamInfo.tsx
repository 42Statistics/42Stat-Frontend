import { gql } from '@/__generated__';
import { HStack, Spinner, VStack } from '@/components/common';
import { useQuery } from '@apollo/client';

const GET_TEAM_INFO = gql(/* GraphQL */ `
  query getTeamInfo {
    getPersonGeneralPage {
      teamInfo {
        teams {
          id
          name
          occurrence
          closedAt
          firstCreatedAt
          finalMark
          isValidated
        }
      }
    }
  }
`);

export const TeamInfo = () => {
  const { loading, error, data } = useQuery(GET_TEAM_INFO);

  if (loading) return <Spinner />;
  if (error) {
    return <h1>{error.message}</h1>;
  }
  if (!data) {
    return <h1>user not found</h1>;
  }

  const { teams } = data.getPersonGeneralPage.teamInfo;
  // const Datas1: number[] = [];
  // const Datas2: number[] = [];
  // const labels: string[] = [];

  //임시 데이터임
  return (
    <VStack h="100%" w="100%" style={{ overflow: 'scroll' }}>
      {teams.map(
        ({
          id,
          name,
          occurrence,
          closedAt,
          firstCreatedAt,
          finalMark,
          isValidated,
        }: any) => {
          return (
            <HStack>
              {id}
              {name}
              {occurrence}
              {closedAt}
              {firstCreatedAt}
              {finalMark}
              {isValidated}
            </HStack>
          );
        },
      )}
    </VStack>
  );
};
