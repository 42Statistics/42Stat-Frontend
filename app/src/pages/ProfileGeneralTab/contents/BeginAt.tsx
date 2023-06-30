import { gql } from '@/__generated__';
import { useQuery } from '@apollo/client';
import { H3Text, HStack, Text } from '@components/common';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@components/elements/DashboardContentView/Error';
import { DashboardContent } from '@components/templates/DashboardContent';
import dayjs from 'dayjs';
import { useParams } from 'react-router-dom';

const GET_BEGIN_AT_BY_LOGIN = gql(/* GraphQL */ `
  query GetBeginAtByLogin($login: String!) {
    getPersonalGeneral(login: $login) {
      beginAt
    }
  }
`);

export const BeginAt = () => {
  const { username } = useParams() as { username: string };

  const title = '본과정 시작일';
  const { loading, error, data } = useQuery(GET_BEGIN_AT_BY_LOGIN, {
    variables: { login: username },
  });
  if (loading) return <DashboardContentLoading />;
  if (error) return <DashboardContentBadRequest message={error.message} />;
  if (!data) return <DashboardContentNotFound />;

  const { beginAt } = data.getPersonalGeneral;
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
