import { useQuery } from '@apollo/client';
import { gql } from '@shared/__generated__';
import { DateTemplate } from '@shared/__generated__/graphql';
import { DashboardContent } from '@shared/components/DashboardContent';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@shared/components/DashboardContentView/Error';
import { NumberCompare } from '@shared/components/DashboardContentView/NumberCompare';
import dayjs from 'dayjs';

const GET_CURR_LAST_EVAL_COUNT_BY_DATE_TEMPLATE = gql(/* GraphQL */ `
  query GetCurrLastEvalCountByDateTemplate(
    $currDateTemplate: DateTemplate!
    $lastDateTemplate: DateTemplate!
  ) {
    getHomeEval {
      currData: evalCountByDateTemplate(dateTemplate: $currDateTemplate) {
        data
        start
        end
      }
      lastData: evalCountByDateTemplate(dateTemplate: $lastDateTemplate) {
        data
        start
        end
      }
    }
  }
`);

export const WeeklyEvalCount = () => {
  const title = '주간 총 평가 횟수';
  const { loading, error, data } = useQuery(
    GET_CURR_LAST_EVAL_COUNT_BY_DATE_TEMPLATE,
    {
      variables: {
        currDateTemplate: DateTemplate.CurrWeek,
        lastDateTemplate: DateTemplate.LastWeek,
      },
    },
  );
  if (loading) {
    return <DashboardContentLoading title={title} />;
  }
  if (error) {
    return <DashboardContentBadRequest title={title} message={error.message} />;
  }
  if (!data) {
    return <DashboardContentNotFound title={title} />;
  }

  const {
    currData: { data: currEvalCount, start, end },
    lastData: { data: lastEvalCount },
  } = data.getHomeEval;

  const description = `${dayjs(start).format('M월 D일')} ~ ${dayjs(end).format(
    'M월 D일',
  )}`;
  const unit = '회';

  return (
    <DashboardContent title={title} description={description}>
      <NumberCompare curr={currEvalCount} last={lastEvalCount} unit={unit} />
    </DashboardContent>
  );
};
