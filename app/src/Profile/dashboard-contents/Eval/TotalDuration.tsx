import { useQuery } from '@apollo/client';
import { gql } from '@shared/__generated__';
import { DashboardContent } from '@shared/components/DashboardContent';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@shared/components/DashboardContentView/Error';
import { TextDefault } from '@shared/components/DashboardContentView/Text/TextDefault';
import { useParams } from 'react-router-dom';

const GET_TOTAL_DURATION_BY_LOGIN = gql(/* GraphQL */ `
  query GetTotalDurationByLogin($login: String!) {
    getPersonalEval(login: $login) {
      totalDuration
    }
  }
`);

export const TotalDuration = () => {
  const { login } = useParams() as { login: string };

  const title = '누적 평가 시간';
  const { loading, error, data } = useQuery(GET_TOTAL_DURATION_BY_LOGIN, {
    variables: { login },
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

  const { totalDuration } = data.getPersonalEval;
  const [hour, minute] = [Math.floor(totalDuration / 60), totalDuration % 60];

  return (
    <DashboardContent title={title}>
      <TextDefault text={`${hour}시간 ${minute}분`} />
    </DashboardContent>
  );
};
