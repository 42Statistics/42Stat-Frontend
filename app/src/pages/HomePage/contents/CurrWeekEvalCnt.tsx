import { gql } from '@/__generated__';
import { Spinner } from '@/components/common';
import { TextCompare } from '@/components/elements/DashboardContentView/Text';
import { useQuery } from '@apollo/client';

const GET_CURR_WEEK_EVAL_CNT = gql(/* GraphQL */ `
  query GetCurrWeekEvalCnt {
    getHomePage {
      currWeekEvalCnt
      lastWeekEvalCnt
    }
  }
`);

export const CurrWeekEvalCnt = () => {
  const { loading, error, data } = useQuery(GET_CURR_WEEK_EVAL_CNT);

  if (loading) return <Spinner />;
  if (error) {
    return <h1>{error.message}</h1>;
  }
  if (!data) {
    return <h1>user not found</h1>;
  }

  const { currWeekEvalCnt, lastWeekEvalCnt } = data.getHomePage;
  const unit = '회';

  return (
    <TextCompare curr={currWeekEvalCnt} last={lastWeekEvalCnt} unit={unit} />
  );
};
