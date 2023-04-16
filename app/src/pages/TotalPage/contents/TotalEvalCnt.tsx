import { gql } from '@/__generated__';
import { Spinner } from '@/components/common';
import { TextDefault } from '@/components/elements/DashboardContentView/Text';
import { numberWithUnitFormatter } from '@/utils/formatters';
import { useQuery } from '@apollo/client';

const GET_TOTAL_EVAL_CNT = gql(/* GraphQL */ `
  query getTotalEvalCnt {
    getTotalPage {
      totalEvalCnt
    }
  }
`);

export const TotalEvalCnt = () => {
  const { loading, error, data } = useQuery(GET_TOTAL_EVAL_CNT);

  if (loading) return <Spinner />;
  if (error) {
    return <h1>{error.message}</h1>;
  }
  if (!data) {
    return <h1>user not found</h1>;
  }

  const { totalEvalCnt } = data.getTotalPage;
  const unit = '회';

  return <TextDefault text={numberWithUnitFormatter(totalEvalCnt, unit)} />;
};
