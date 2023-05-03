import { gql } from '@/__generated__';
import { Loader } from '@/components/common';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@/components/elements/DashboardContentView';
import { NumberCompare } from '@/components/elements/DashboardContentView/Text';
import { useQuery } from '@apollo/client';

const GET_CURR_WEEK_EVAL_CNT = gql(/* GraphQL */ `
  query GetCurrWeekEvalCnt {
    getHomePage {
      currWeekEvalCnt {
        data
        from
        to
      }
      lastWeekEvalCnt {
        data
        from
        to
      }
    }
  }
`);

export const CurrWeekEvalCnt = () => {
  const { loading, error, data } = useQuery(GET_CURR_WEEK_EVAL_CNT);

  if (loading) return <Loader />;
  if (error) return <ApolloBadRequest msg={error.message} />;
  if (!data) return <ApolloNotFound />;

  const { currWeekEvalCnt, lastWeekEvalCnt } = data.getHomePage;
  const unit = '회';

  return (
    <NumberCompare
      curr={currWeekEvalCnt.data}
      last={lastWeekEvalCnt.data}
      unit={unit}
    />
  );
};
