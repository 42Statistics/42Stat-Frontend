import { useQuery } from '@apollo/client';
import { DashboardContent } from '@shared/components/DashboardContent';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@shared/components/DashboardContentView/Error';
import { Body1Text, H3MediumText, HStack } from '@shared/ui-kit';
import dayjs from 'dayjs';
import { useParams } from 'react-router-dom';
import { GET_PERSONAL_GENERAL_ZERO_COST_BY_LOGIN } from '../../dashboard-contents-queries/GET_PERSONAL_GENERAL_ZERO_COST_BY_LOGIN';
import { dDayFormatter } from '@shared/utils/formatters/dDayFormatter';

export const BeginAt = () => {
  const { login } = useParams() as { login: string };

  const title = '본과정 시작일';
  const { loading, error, data } = useQuery(
    GET_PERSONAL_GENERAL_ZERO_COST_BY_LOGIN,
    {
      variables: { login },
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
        <H3MediumText>{dayjs(beginAt).format('YYYY. MM. DD.')}</H3MediumText>
        <Body1Text>{dDayFormatter(new Date(beginAt))}</Body1Text>
      </HStack>
    </DashboardContent>
  );
};
