import { useQuery } from '@apollo/client';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@components/elements/DashboardContentView/Error';
import { NumberDefault } from '@components/elements/DashboardContentView/NumberDefault';
import { gql } from '@shared/__generated__';
import { DashboardContent } from '@shared/components/DashboardContent';
import { useParams } from 'react-router-dom';

const GET_TOTAL_COUNT_BY_LOGIN = gql(/* GraphQL */ `
  query GetTotalCountByLogin($login: String!) {
    getPersonalEval(login: $login) {
      totalCount
    }
  }
`);

export const TotalCount = () => {
  const { username } = useParams() as { username: string };

  const title = '누적 평가 횟수';
  const { loading, error, data } = useQuery(GET_TOTAL_COUNT_BY_LOGIN, {
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

  const { totalCount } = data.getPersonalEval;
  const unit = '회';

  return (
    <DashboardContent title={title}>
      <NumberDefault number={totalCount} unit={unit} />
    </DashboardContent>
  );
};
