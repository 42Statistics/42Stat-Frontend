import { useQuery } from '@apollo/client';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@components/elements/DashboardContentView/Error';
import { DashboardContent } from '@components/templates/DashboardContent';
import { H2BoldText, H3Text, HStack } from '@shared/ui-kit';
import { dDayFormatter } from '@shared/utils/formatters';
import { getDateDiff } from '@shared/utils/getDateDiff';
import dayjs from 'dayjs';
import { useParams } from 'react-router-dom';
import { GET_PERSONAL_GENERAL_ZERO_COST_BY_LOGIN } from '../queries/GET_PERSONAL_GENERAL_ZERO_COST_BY_LOGIN';

export const BeginAt = () => {
  const { username } = useParams() as { username: string };

  const title = '본과정 시작일';
  const { loading, error, data } = useQuery(
    GET_PERSONAL_GENERAL_ZERO_COST_BY_LOGIN,
    {
      variables: { login: username },
    },
  );

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
