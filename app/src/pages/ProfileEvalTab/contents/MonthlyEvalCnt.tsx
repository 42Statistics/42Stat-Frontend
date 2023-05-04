import { gql } from '@/__generated__';
import { Loader } from '@/components/common';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@/components/elements/DashboardContentView';
import { NumberCompare } from '@/components/elements/DashboardContentView/Text';
import { useQuery } from '@apollo/client';

const GET_MONTHLY_EVAL_CNT = gql(/* GraphQL */ `
  query getMonthlyEvalCnt($uid: Int!) {
    getPersonalEvalPage(uid: $uid) {
      currMonthCount {
        data
        from
        to
      }
      lastMonthCount {
        data
        from
        to
      }
    }
  }
`);

export const MonthlyEvalCnt = () => {
  const { loading, error, data } = useQuery(GET_MONTHLY_EVAL_CNT, {
    variables: { uid: 99947 },
  });

  if (loading) return <Loader />;
  if (error) return <ApolloBadRequest msg={error.message} />;
  if (!data) return <ApolloNotFound />;

  const { currMonthCount, lastMonthCount } = data.getPersonalEvalPage;

  return (
    <NumberCompare
      curr={currMonthCount.data}
      last={lastMonthCount.data}
      unit="회"
    />
  );
};
