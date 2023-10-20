import { useQuery } from '@apollo/client';

import { gql } from '@shared/__generated__';
import { DashboardContent } from '@shared/components/DashboardContent';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@shared/components/DashboardContentView/Error';
import { NumberDefault } from '@shared/components/DashboardContentView/Number/NumberDefault';

const GET_TOTAL_EVAL_COUNT = gql(/* GraphQL */ `
  query GetTotalEvalCount {
    getHomeEval {
      totalEvalCount
    }
  }
`);

export const TotalEvalCount = () => {
  const title = '역대 총 평가 횟수';
  const { loading, error, data } = useQuery(GET_TOTAL_EVAL_COUNT);
  if (loading) {
    return <DashboardContentLoading title={title} />;
  }
  if (error) {
    return <DashboardContentBadRequest title={title} message={error.message} />;
  }
  if (!data) {
    return <DashboardContentNotFound title={title} />;
  }

  const { totalEvalCount } = data.getHomeEval;
  const unit = '회';

  return (
    <DashboardContent title={title}>
      <NumberDefault number={totalEvalCount} unit={unit} />
    </DashboardContent>
  );
};
