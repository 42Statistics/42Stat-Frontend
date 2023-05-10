import { gql } from '@/__generated__';
import { Loader } from '@/components/common';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@/components/elements/DashboardContentView';
import { NumberCompare } from '@/components/elements/DashboardContentView/Text';
import { DashboardContent } from '@/components/templates/Dashboard';
import { dateFormatter } from '@/utils/formatters';
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
  const { from, to } = currWeekEvalCnt;
  const [fromStr, toStr] = [dateFormatter(from, 'lg'), dateFormatter(to, 'lg')];

  const title = '주간 총 평가 횟수';
  const description = `(${fromStr} ~ ${toStr} / 1주)`;
  const unit = '회';

  return (
    <DashboardContent title={title} description={description}>
      <NumberCompare
        curr={currWeekEvalCnt.data}
        last={lastWeekEvalCnt.data}
        unit={unit}
      />
    </DashboardContent>
  );
};
