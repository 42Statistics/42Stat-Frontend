import { gql } from '@/__generated__';
import { useQuery } from '@apollo/client';
import { Loader } from '@components/common';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@components/elements/DashboardContentView';
import { NumberDefault } from '@components/elements/DashboardContentView/Text';
import { DashboardContent } from '@components/templates/DashboardContent';
import dayjs from 'dayjs';

const GET_CURRWEEK_AVERAGE_EVAL_COUNT = gql(/* GraphQL */ `
  query GetCurrWeekAverageEvalCount {
    getHomeEval {
      evalCountByDateTemplate(dateTemplate: CURR_WEEK) {
        data
        start
        end
      }
    }
  }
`);
export const CurrWeekAverageEvalCount = () => {
  const title = '주간 1인당 평가 횟수';
  const {
    loading,
    error,
    data: queryData,
  } = useQuery(GET_CURRWEEK_AVERAGE_EVAL_COUNT);

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
  if (!queryData)
    return (
      <DashboardContent title={title}>
        <ApolloNotFound />
      </DashboardContent>
    );

  const { evalCountByDateTemplate } = queryData.getHomeEval;
  const { data, start, end } = evalCountByDateTemplate;
  const description = `${dayjs().format('YYYY년 M월 w주')}`;
  const unit = '회';

  return (
    <DashboardContent title={title} description={description}>
      <NumberDefault number={data} unit={unit} />
    </DashboardContent>
  );
};
