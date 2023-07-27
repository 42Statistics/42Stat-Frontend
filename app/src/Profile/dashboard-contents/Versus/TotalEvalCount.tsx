import { useQuery } from '@apollo/client';
import { gql } from '@shared/__generated__';
import { DateTemplate } from '@shared/__generated__/graphql';
import { userAtom } from '@shared/atoms/userAtom';
import { DashboardContent } from '@shared/components/DashboardContent';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@shared/components/DashboardContentView/Error';
import { NumberVersus } from '@shared/components/DashboardContentView/Number/NumberVersus';
import { useAtomValue } from 'jotai';
import { useParams } from 'react-router-dom';

const GET_EVAL_COUNT_BY_DATE_TEMPLATE_VERSUS = gql(/* GraphQL */ `
  query GetEvalCountByDateTemplateVersus(
    $login1: String!
    $login2: String!
    $dateTemplate: DateTemplate!
  ) {
    data1: getPersonalEval(login: $login1) {
      countByDateTemplate(dateTemplate: $dateTemplate) {
        data
        start
        end
      }
    }
    data2: getPersonalEval(login: $login2) {
      countByDateTemplate(dateTemplate: $dateTemplate) {
        data
        start
        end
      }
    }
  }
`);

export const TotalEvalCount = () => {
  const { username } = useParams() as { username: string };
  const user = useAtomValue(userAtom);

  const title = '누적 평가 횟수';
  const { loading, error, data } = useQuery(
    GET_EVAL_COUNT_BY_DATE_TEMPLATE_VERSUS,
    {
      variables: {
        login1: username,
        login2: user.login,
        dateTemplate: DateTemplate.Total,
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
    data1: {
      countByDateTemplate: { data: count },
    },
    data2: {
      countByDateTemplate: { data: myCount },
    },
  } = data;
  const unit = '회';

  return (
    <DashboardContent title={title}>
      <NumberVersus number1={count} number2={myCount} unit={unit} />
    </DashboardContent>
  );
};
