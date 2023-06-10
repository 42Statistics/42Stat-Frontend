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
import { useParams } from 'react-router-dom';

const GET_MONTHLY_EVAL_COUNT = gql(/* GraphQL */ `
  query getMonthlyEvalCount($login: String!) {
    getPersonalEvalPage(login: $login) {
      currMonthCount: countByDateTemplate(dateTemplate: CURR_WEEK) {
        data
        start
        end
      }
      lastMonthCount: countByDateTemplate(dateTemplate: LAST_WEEK) {
        data
        start
        end
      }
    }
  }
`);

export const MonthlyEvalCount = () => {
  const { username } = useParams() as { username: string };

  const title = '월간 평가 횟수';
  const { loading, error, data } = useQuery(GET_MONTHLY_EVAL_COUNT, {
    variables: { login: username },
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

  const { currMonthCount, lastMonthCount } = data.getPersonalEvalPage;
  const { start, end } = currMonthCount;
  const description = `${dayjs(start).format('YYYY년 M월')}`;

  return (
    <DashboardContent title={title} description={description}>
      <NumberCompare
        curr={currMonthCount.data}
        last={lastMonthCount.data}
        unit="회"
      />
    </DashboardContent>
  );
};
