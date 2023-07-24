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
  } = data.getPersonalEval;
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
