import { gql } from '@/__generated__';
import { Spinner } from '@/components/common';
import { TextCompare } from '@/components/elements/DashboardContentView/Text';
import { useQuery } from '@apollo/client';

const GET_MONTHLY_EVAL_CNT = gql(/* GraphQL */ `
  query getMonthlyEvalCnt {
    getPersonalEvalPage {
      evalProfile {
        currMonthCnt
        lastMonthCnt
      }
    }
  }
`);

export const MonthlyEvalCnt = () => {
  const { loading, error, data } = useQuery(GET_MONTHLY_EVAL_CNT);

  if (loading) return <Spinner />;
  if (error) {
    return <h1>{error.message}</h1>;
  }
  if (!data) {
    return <h1>user not found</h1>;
  }

  const { currMonthCnt, lastMonthCnt } = data.getPersonalEvalPage.evalProfile;

  return <TextCompare curr={currMonthCnt} last={lastMonthCnt} unit="회" />;
};
