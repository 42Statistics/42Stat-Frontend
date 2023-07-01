import { gql } from '@/__generated__';
import { DateTemplate } from '@/__generated__/graphql';
import { useQuery } from '@apollo/client';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@components/elements/DashboardContentView/Error';
import { NumberCompare } from '@components/elements/DashboardContentView/NumberCompare';
import { DashboardContent } from '@components/templates/DashboardContent';
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
  if (loading) return <DashboardContentLoading />;
  if (error) return <DashboardContentBadRequest message={error.message} />;
  if (!data) return <DashboardContentNotFound />;

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