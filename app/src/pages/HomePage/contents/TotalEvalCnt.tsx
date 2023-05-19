import { gql } from '@/__generated__';
import { Loader } from '@/components/common';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@/components/elements/DashboardContentView';
import { NumberDefault } from '@/components/elements/DashboardContentView/Text';
import { DashboardContent } from '@/components/templates/Dashboard';
import { useQuery } from '@apollo/client';

const GET_TOTAL_EVAL_COUNT = gql(/* GraphQL */ `
  query getTotalEvalCount {
    getTotalPage {
      totalEvalCount
    }
  }
`);

export const TotalEvalCnt = () => {
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

  const { totalEvalCount } = data.getTotalPage;
  const unit = '회';

  return (
    <DashboardContent title={title}>
      <NumberDefault number={totalEvalCount} unit={unit} />
    </DashboardContent>
  );
};
