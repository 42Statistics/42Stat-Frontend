import { gql } from '@/__generated__';
import { useQuery } from '@apollo/client';
import { H2BoldText, H3Text, HStack } from '@components/common';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@components/elements/DashboardContentView/Error';
import { DashboardContent } from '@components/templates/DashboardContent';
import { dDayFormatter } from '@utils/formatters';
import { getDateDiff } from '@utils/getDateDiff';
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

  if (loading) {
    return <DashboardContentLoading title={title} />;
  }
  if (error) {
    return <DashboardContentBadRequest title={title} message={error.message} />;
  }
  if (!data) {
    return <DashboardContentNotFound title={title} />;
  }

  const { beginAt } = data.getPersonalGeneral;
  const diff = getDateDiff(new Date(), new Date(beginAt));

  return (
    <DashboardContent title={title}>
      <HStack spacing="1rem" align="baseline">
        <H2BoldText>{dayjs(beginAt).format('YYYY. MM. DD.')}</H2BoldText>
        <H3Text>{dDayFormatter(diff)}</H3Text>
      </HStack>
    </DashboardContent>
  );
};
