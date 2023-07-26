import { useQuery } from '@apollo/client';
import { DashboardContent } from '@shared/components/DashboardContent';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@shared/components/DashboardContentView/Error';
import { H2MediumText, H3Text, HStack } from '@shared/ui-kit';
import { dDayFormatter } from '@shared/utils/formatters';
import dayjs from 'dayjs';
import { useParams } from 'react-router-dom';
import { GET_PERSONAL_GENERAL_ZERO_COST_BY_LOGIN } from '../../dashboard-contents-queries/GET_PERSONAL_GENERAL_ZERO_COST_BY_LOGIN';

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

  return (
    <DashboardContent title={title}>
      <HStack spacing="1rem" align="baseline">
        <H2MediumText>{dayjs(beginAt).format('YYYY. MM. DD.')}</H2MediumText>
        <H3Text>{dDayFormatter(new Date(beginAt))}</H3Text>
      </HStack>
    </DashboardContent>
  );
};
