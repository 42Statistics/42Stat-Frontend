import { gql } from '@/__generated__';
import { Spinner } from '@/components/common';
import { TextCompare } from '@/components/elements/DashboardContentView/Text';
import { useQuery } from '@apollo/client';

const GET_MONTHLY_EVAL_CNT = gql(/* GraphQL */ `
  query getMonthlyEvalCnt($uid: Int!) {
    getPersonalEvalPage(uid: $uid) {
      currMonthCount
      lastMonthCount
    }
  }
`);

export const MonthlyEvalCnt = () => {
  const { loading, error, data } = useQuery(GET_MONTHLY_EVAL_CNT, {
    variables: { uid: 99947 },
  });

  if (loading) return <Spinner />;
  if (error) {
    return <h1>{error.message}</h1>;
  }
  if (!data) {
    return <h1>user not found</h1>;
  }

  const { currMonthCount, lastMonthCount } = data.getPersonalEvalPage;

  return <TextCompare curr={currMonthCount} last={lastMonthCount} unit="회" />;
};
