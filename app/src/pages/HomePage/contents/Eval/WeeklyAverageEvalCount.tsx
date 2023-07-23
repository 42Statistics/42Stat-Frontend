import { gql } from '@shared/__generated__';
import { DateTemplate } from '@shared/__generated__/graphql';
import { useQuery } from '@apollo/client';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@components/elements/DashboardContentView/Error';
import { NumberDefault } from '@components/elements/DashboardContentView/NumberDefault';
import { DashboardContent } from '@components/templates/DashboardContent';
import dayjs from 'dayjs';

const GET_AVERAGE_EVAL_COUNT_BY_DATE_TEMPLATE = gql(/* GraphQL */ `
  query GetAverageEvalCountByDateTemplate($dateTemplate: DateTemplate!) {
    getHomeEval {
      averageEvalCountByDateTemplate(dateTemplate: $dateTemplate) {
        data
        start
        end
      }
    }
  }
`);
export const WeeklyAverageEvalCount = () => {
  const title = '주간 1인당 평가 횟수';
  const { loading, error, data } = useQuery(
    GET_AVERAGE_EVAL_COUNT_BY_DATE_TEMPLATE,
    {
      variables: {
        dateTemplate: DateTemplate.CurrWeek,
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
    data: currData,
    start,
    end,
  } = data.getHomeEval.averageEvalCountByDateTemplate;
  const description = `${dayjs(start).format('M월 D일')} ~ ${dayjs(end).format(
    'M월 D일',
  )}`;
  const unit = '회';

  return (
    <DashboardContent title={title} description={description}>
      <NumberDefault number={currData} unit={unit} fixedNumber={2} />
    </DashboardContent>
  );
};
