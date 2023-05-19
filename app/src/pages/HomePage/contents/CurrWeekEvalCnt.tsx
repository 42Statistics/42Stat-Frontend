import { gql } from '@/__generated__';
import { Loader } from '@/components/common';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@/components/elements/DashboardContentView';
import { NumberCompare } from '@/components/elements/DashboardContentView/Text';
import { DashboardContent } from '@/components/templates/Dashboard';
import { useQuery } from '@apollo/client';
import dayjs from 'dayjs';

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
  const title = '주간 총 평가 횟수';
  const { loading, error, data } = useQuery(GET_CURR_WEEK_EVAL_CNT);
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

  const { currWeekEvalCnt, lastWeekEvalCnt } = data.getHomePage;
  const { from, to } = currWeekEvalCnt;

  const description = `${dayjs(from).format('YYYY년 M월 w주')}`;
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
