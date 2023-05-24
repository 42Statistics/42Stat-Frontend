import { gql } from '@/__generated__';
import { Loader } from '@/components/common';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@/components/elements/DashboardContentView';
import { NumberDefault } from '@/components/elements/DashboardContentView/Text';
import { DashboardContent } from '@/components/templates/Dashboard';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

const GET_PERSONAL_TOTAL_EVAL_COUNT = gql(/* GraphQL */ `
  query getPersonalTotalEvalCount($login: String!) {
    getPersonalEvalPage(login: $login) {
      totalCount
    }
  }
`);

export const TotalEvalCount = () => {
  const { username } = useParams() as { username: string };

  const title = '누적 평가 횟수';
  const { loading, error, data } = useQuery(GET_PERSONAL_TOTAL_EVAL_COUNT, {
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
