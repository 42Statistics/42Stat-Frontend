import { gql } from '@/__generated__';
import { DateTemplate } from '@/__generated__/graphql';
import { useQuery } from '@apollo/client';
import { Loader } from '@components/common';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@components/elements/DashboardContentView';
import { NumberCompare } from '@components/elements/DashboardContentView/Text';
import { DashboardContent } from '@components/templates/DashboardContent';
import dayjs from 'dayjs';

const GET_EVAL_COUNT_BY_DATE_TEMPLATE = gql(/* GraphQL */ `
  query GetEvalCountByDateTemplate($curr: DateTemplate!, $last: DateTemplate!) {
    getHomeEval {
      curr: evalCountByDateTemplate(dateTemplate: $curr) {
        data
        start
        end
      }
      last: evalCountByDateTemplate(dateTemplate: $last) {
        data
        start
        end
      }
    }
  }
`);

export const CurrWeekEvalCount = () => {
  const title = '주간 총 평가 횟수';
  const { loading, error, data } = useQuery(GET_EVAL_COUNT_BY_DATE_TEMPLATE, {
    variables: {
      curr: DateTemplate.CurrWeek,
      last: DateTemplate.LastWeek,
    },
  });
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

  const {
    curr: { data: currData, start },
    last: { data: lastData },
  } = data.getHomeEval;

  const description = `${dayjs(start).format('YYYY년 M월 w주')}`;
  const unit = '회';

  return (
    <DashboardContent title={title} description={description}>
      <NumberCompare curr={currData} last={lastData} unit={unit} />
    </DashboardContent>
  );
};
