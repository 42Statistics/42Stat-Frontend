import { gql } from '@/__generated__';
import { useQuery } from '@apollo/client';
import { H3Text, HStack, Loader, Text } from '@components/common';
import { CoalitionMark } from '@components/elements/CoalitionMark';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@components/elements/DashboardContentView/Error';
import { DashboardContent } from '@components/templates/DashboardContent';
import { useParams } from 'react-router-dom';

const GET_COALITION_SCORE_BY_LOGIN = gql(/* GraphQL */ `
  query GetCoalitionScore($login: String!) {
    getPersonalGeneral(login: $login) {
      userProfile {
        coalition {
          id
          name
          slug
          imageUrl
          coverUrl
          color
          score
          userId
        }
      }
      scoreInfo {
        value
        rankInCoalition
      }
    }
  }
`);

export const CoalitionScore = () => {
  const { username } = useParams() as { username: string };

  const title = '코알리숑 스코어';
  const { loading, error, data } = useQuery(GET_COALITION_SCORE_BY_LOGIN, {
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

  const { userProfile, scoreInfo } = data.getPersonalGeneral;
  const { coalition } = userProfile;
  const { value } = scoreInfo;
  return (
    <DashboardContent title={title}>
      <HStack h="100%" spacing="1rem">
        <H3Text>{value.toLocaleString()}</H3Text>
        <HStack spacing="0.5rem">
          <CoalitionMark coalition={coalition} />
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
