import { gql } from '@shared/__generated__';
import { useQuery } from '@apollo/client';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@components/elements/DashboardContentView/Error';
import { NumberDefault } from '@components/elements/DashboardContentView/NumberDefault';
import { DashboardContent } from '@components/templates/DashboardContent';
import { useParams } from 'react-router-dom';

const GET_AVERAGE_DURATION_BY_LOGIN = gql(/* GraphQL */ `
  query GetAverageDurationByLogin($login: String!) {
    getPersonalEval(login: $login) {
      averageDuration
    }
  }
`);

export const AverageDuration = () => {
  const { username } = useParams() as { username: string };

  const title = '평균 평가 시간';
  const description = '평가자일 때';
  const { loading, error, data } = useQuery(GET_AVERAGE_DURATION_BY_LOGIN, {
    variables: { login: username },
  });

  if (loading) {
    return <DashboardContentLoading title={title} description={description} />;
  }
  if (error) {
    return (
      <DashboardContentBadRequest
        title={title}
        description={description}
        message={error.message}
      />
    );
  }
  if (!data) {
    return <DashboardContentNotFound title={title} description={description} />;
  }

  const { averageDuration } = data.getPersonalEval;
  const unit = '분';

  return (
    <DashboardContent title={title} description={description}>
      <NumberDefault number={averageDuration} unit={unit} />
    </DashboardContent>
  );
};
