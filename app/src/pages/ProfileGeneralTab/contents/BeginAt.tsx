import { useQuery } from '@apollo/client';
import { H3Text, HStack, Text } from '@components/common';
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
import { GET_PERSONAL_GENERAL_BY_LOGIN } from '../GET_PERSONAL_GENERAL_BY_LOGIN';

export const BeginAt = () => {
  const { username } = useParams() as { username: string };

  const title = '본과정 시작일';
  const { loading, error, data } = useQuery(GET_PERSONAL_GENERAL_BY_LOGIN, {
    variables: { login: username },
  });
  if (loading) return <DashboardContentLoading />;
  if (error) return <DashboardContentBadRequest message={error.message} />;
  if (!data) return <DashboardContentNotFound />;

  const { beginAt } = data.getPersonalGeneral;
  const diff = getDateDiff(new Date(), new Date(beginAt));

  return (
    <DashboardContent title={title}>
      <HStack spacing="1rem">
        <H3Text>{dayjs(beginAt).format('YYYY. MM. DD.')}</H3Text>
        <Text>{dDayFormatter(diff)}</Text>
      </HStack>
    </DashboardContent>
  );
};
