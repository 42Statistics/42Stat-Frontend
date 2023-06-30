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
import { useParams } from 'react-router-dom';

const GET_EVAL_COUNT_BY_DATE_TEMPLATE_BY_LOGIN = gql(/* GraphQL */ `
  query GetEvalCountByDateTemplateByLogin(
    $login: String!
    $currDateTemplate: DateTemplate!
    $lastDateTemplate: DateTemplate!
  ) {
    getPersonalEval(login: $login) {
      currData: countByDateTemplate(dateTemplate: $currDateTemplate) {
        data
        start
        end
      }
      lastData: countByDateTemplate(dateTemplate: $lastDateTemplate) {
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
  const { loading, error, data } = useQuery(
    GET_EVAL_COUNT_BY_DATE_TEMPLATE_BY_LOGIN,
    {
      variables: {
        login: username,
        currDateTemplate: DateTemplate.CurrMonth,
        lastDateTemplate: DateTemplate.LastMonth,
      },
    },
  );
  if (loading) return <DashboardContentLoading />;
  if (error) return <DashboardContentBadRequest message={error.message} />;
  if (!data) return <DashboardContentNotFound />;

  const {
    currData: { data: currEvalCount, start, end },
    lastData: { data: lastEvalCount },
  } = data.getPersonalEval;
  const description = `${dayjs(start).format('M월 D일')} ~ ${dayjs(end).format(
    'M월 D일',
  )}`;

  return (
    <DashboardContent title={title} description={description}>
      <NumberCompare curr={currEvalCount} last={lastEvalCount} unit="회" />
    </DashboardContent>
  );
};
