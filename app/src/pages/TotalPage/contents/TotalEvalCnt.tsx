import { gql } from '@/__generated__';
import { Spinner } from '@/components/common';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@/components/elements/DashboardContentView';
import { TextDefault } from '@/components/elements/DashboardContentView/Text';
import { numberWithUnitFormatter } from '@/utils/formatters';
import { useQuery } from '@apollo/client';

const GET_TOTAL_EVAL_COUNT = gql(/* GraphQL */ `
  query getTotalEvalCount {
    getTotalPage {
      totalEvalCount
    }
  }
`);

export const TotalEvalCnt = () => {
  const { loading, error, data } = useQuery(GET_TOTAL_EVAL_COUNT);

  if (loading) return <Spinner />;
  if (error) return <ApolloBadRequest msg={error.message} />;
  if (!data) return <ApolloNotFound />;

  const { totalEvalCount } = data.getTotalPage;
  const unit = '회';

  return <TextDefault text={numberWithUnitFormatter(totalEvalCount, unit)} />;
};
