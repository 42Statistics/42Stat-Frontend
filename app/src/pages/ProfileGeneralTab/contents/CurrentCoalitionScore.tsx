import { gql } from '@/__generated__';
import { H3Text, HStack, Image, Loader, Text } from '@/components/common';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@/components/elements/DashboardContentView';
import { DashboardContent } from '@/components/templates/Dashboard';
import { useQuery } from '@apollo/client';
import styled from '@emotion/styled';
import { useParams } from 'react-router-dom';

const GET_CURRENT_COALITION_SCORE = gql(/* GraphQL */ `
  query getCurrentCoalitionScore($login: String!) {
    getPersonGeneralPage(login: $login) {
      userProfile {
        coalition {
          score
          imageUrl
          color
        }
        scoreInfo {
          rankInCoalition
        }
      }
    }
  }
`);

export const CurrentCoalitionScore = () => {
  const { username } = useParams() as { username: string };

  const title = '코알리숑 스코어';
  const { loading, error, data } = useQuery(GET_CURRENT_COALITION_SCORE, {
    variables: { login: username },
  });
  if (loading)
    return (
      <DashboardContent title={title}>
        <Loader />
      </DashboardContent>
    );
  if (error)
    return (
      <DashboardContent title={title}>
        <ApolloBadRequest msg={error.message} />
      </DashboardContent>
    );
  if (!data)
    return (
      <DashboardContent title={title}>
        <ApolloNotFound />
      </DashboardContent>
    );

  const { coalition, scoreInfo } = data.getPersonGeneralPage.userProfile;
  return (
    <DashboardContent title={title}>
      <HStack h="100%" spacing="1rem">
        <H3Text>{coalition.score.toLocaleString()}</H3Text>
        <HStack spacing="0.5rem">
          {coalition.imageUrl && coalition.color && (
            <StyledCoalitionMark
              size="1.8rem"
              src={coalition.imageUrl}
              style={{ backgroundColor: coalition.color }}
            />
          )}
          {scoreInfo?.rankInCoalition && (
            <HStack align="baseline">
              <H3Text>{scoreInfo.rankInCoalition.toLocaleString()}</H3Text>
              <Text>위</Text>
            </HStack>
          )}
        </HStack>
      </HStack>
    </DashboardContent>
  );
};

const StyledCoalitionMark = styled(Image)<{ size?: string }>`
  width: ${({ size = '2.2rem' }) => size};
  height: ${({ size = '2.4rem' }) => size};
  object-fit: cover;
  border-radius: 50%;
`;
