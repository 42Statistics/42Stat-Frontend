import { gql } from '@/__generated__';
import { useQuery } from '@apollo/client';
import { Loader } from '@components/common';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@components/elements/DashboardContentView/Error';
import { NumberDefault } from '@components/elements/DashboardContentView/NumberDefault';
import { DashboardContent } from '@components/templates/DashboardContent';
import { useParams } from 'react-router-dom';

const GET_TOTAL_EVAL_COUNT_BY_LOGIN = gql(/* GraphQL */ `
  query GetTotalEvalCountByLogin($login: String!) {
    getPersonalEvalPage(login: $login) {
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

  if (loading)
    return (
      <DashboardContent title={title}>
        <Loader />
      </DashboardContent>
    );
  if (error)
    return (
      <DashboardContent title={title}>
        <ApolloBadRequest msg={error.message} />
      </DashboardContent>
    );
  if (!data)
    return (
      <DashboardContent title={title}>
        <ApolloNotFound />
      </DashboardContent>
    );

  const { totalCount } = data.getPersonalEvalPage;
  const unit = '회';

  return (
    <DashboardContent title={title}>
      <NumberDefault number={totalCount} unit={unit} />
    </DashboardContent>
  );
};
