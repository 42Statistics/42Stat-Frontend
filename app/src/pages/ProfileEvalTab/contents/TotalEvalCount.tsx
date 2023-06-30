import { gql } from '@/__generated__';
import { useQuery } from '@apollo/client';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@components/elements/DashboardContentView/Error';
import { NumberDefault } from '@components/elements/DashboardContentView/NumberDefault';
import { DashboardContent } from '@components/templates/DashboardContent';
import { useParams } from 'react-router-dom';

const GET_TOTAL_EVAL_COUNT_BY_LOGIN = gql(/* GraphQL */ `
  query GetTotalEvalCountByLogin($login: String!) {
    getPersonalEval(login: $login) {
      totalCount
    }
  }
`);

export const TotalEvalCount = () => {
  const { username } = useParams() as { username: string };

  const title = '누적 평가 횟수';
  const { loading, error, data } = useQuery(GET_TOTAL_EVAL_COUNT_BY_LOGIN, {
    variables: { login: username },
  });
  if (loading) return <DashboardContentLoading />;
  if (error) return <DashboardContentBadRequest message={error.message} />;
  if (!data) return <DashboardContentNotFound />;

  const { totalCount } = data.getPersonalEval;
  const unit = '회';

  return (
    <DashboardContent title={title}>
      <NumberDefault number={totalCount} unit={unit} />
    </DashboardContent>
  );
};
