import { useQuery } from '@apollo/client';
import { gql } from '@shared/__generated__';
import { DashboardContent } from '@shared/components/DashboardContent';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@shared/components/DashboardContentView/Error';
import { NumberDefault } from '@shared/components/DashboardContentView/Number/NumberDefault';
import { useParams } from 'react-router-dom';

const GET_AVERAGE_FEEDBACK_LENGTH_BY_LOGIN = gql(/* GraphQL */ `
  query GetAverageFeedbackLengthByLogin($login: String!) {
    getPersonalEval(login: $login) {
      averageFeedbackLength
    }
  }
`);

export const AverageFeedbackLength = () => {
  const { username } = useParams() as { username: string };

  const title = '평균 피드백 길이';
  const { loading, error, data } = useQuery(
    GET_AVERAGE_FEEDBACK_LENGTH_BY_LOGIN,
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

  const { averageFeedbackLength } = data.getPersonalEval;
  const unit = '자';

  return (
    <DashboardContent title={title}>
      <NumberDefault number={averageFeedbackLength} unit={unit} />
    </DashboardContent>
  );
};
