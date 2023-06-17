import { gql } from '@/__generated__';
import { useQuery } from '@apollo/client';
import { Loader } from '@components/common';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@components/elements/DashboardContentView/Error';
import { NumberDefault } from '@components/elements/DashboardContentView/NumberDefault';
import { DashboardContent } from '@components/templates/DashboardContent';

const GET_TOTAL_EVAL_COUNT = gql(/* GraphQL */ `
  query getTotalEvalCount {
    getHomeEval {
      totalEvalCount
    }
  }
`);

export const TotalEvalCount = () => {
  const title = '역대 총 평가 횟수';
  const { loading, error, data } = useQuery(GET_TOTAL_EVAL_COUNT);
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

  const { totalEvalCount } = data.getHomeEval;
  const unit = '회';

  return (
    <DashboardContent title={title}>
      <NumberDefault number={totalEvalCount} unit={unit} />
    </DashboardContent>
  );
};
