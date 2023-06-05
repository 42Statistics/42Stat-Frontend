import { gql } from '@/__generated__';
import { useQuery } from '@apollo/client';
import { Loader } from '@components/common';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@components/elements/DashboardContentView';
import { NumberCompare } from '@components/elements/DashboardContentView/Text';
import { DashboardContent } from '@components/templates/DashboardContent';
import dayjs from 'dayjs';

const GET_CURR_WEEK_EVAL_COUNT = gql(/* GraphQL */ `
  query GetCurrWeekEvalCount {
    getHomePage {
      currWeekEvalCount {
        data
        from
        to
      }
      lastWeekEvalCount {
        data
        from
        to
      }
    }
  }
`);

export const CurrWeekEvalCount = () => {
  const title = '주간 총 평가 횟수';
  const { loading, error, data } = useQuery(GET_CURR_WEEK_EVAL_COUNT);
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

  const { currWeekEvalCount, lastWeekEvalCount } = data.getHomePage;
  const { from, to } = currWeekEvalCount;

  const description = `${dayjs(from).format('YYYY년 M월 w주')}`;
  const unit = '회';

  return (
    <DashboardContent title={title} description={description}>
      <NumberCompare
        curr={currWeekEvalCount.data}
        last={lastWeekEvalCount.data}
        unit={unit}
      />
    </DashboardContent>
  );
};
