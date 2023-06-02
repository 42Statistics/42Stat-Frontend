import { gql } from '@/__generated__';
import { useQuery } from '@apollo/client';
import { H3Text, HStack, Loader, Text } from '@components/common';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@components/elements/DashboardContentView';
import { DashboardContent } from '@components/templates/DashboardContent';
import dayjs from 'dayjs';
import { useParams } from 'react-router-dom';

const GET_BEGIN_AT = gql(/* GraphQL */ `
  query getBeginAt($login: String!) {
    getPersonGeneralPage(login: $login) {
      userProfile {
        beginAt
      }
    }
  }
`);

export const BeginAt = () => {
  const { username } = useParams() as { username: string };

  const title = '본과정 시작일';
  const { loading, error, data } = useQuery(GET_BEGIN_AT, {
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

  const { beginAt } = data.getPersonGeneralPage.userProfile;
  const daysFromBegin = Math.floor(
    (Date.now() - new Date(beginAt).getTime()) / 1000 / 60 / 60 / 24,
  );

  return (
    <DashboardContent title={title}>
      <HStack w="100%" h="100%" spacing="1rem">
        <H3Text>{dayjs(beginAt).format('YYYY. MM. DD.')}</H3Text>
        <Text>D+{daysFromBegin}</Text>
      </HStack>
    </DashboardContent>
  );
};
