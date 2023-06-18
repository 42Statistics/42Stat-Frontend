import { gql } from '@/__generated__';
import { DateTemplate } from '@/__generated__/graphql';
import { useQuery } from '@apollo/client';
import { Loader } from '@components/common';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@components/elements/DashboardContentView/Error';
import { NumberDefault } from '@components/elements/DashboardContentView/NumberDefault';
import { DashboardContent } from '@components/templates/DashboardContent';

const GET_EVAL_COUNT_BY_DATE_TEMPLATE = gql(/* GraphQL */ `
  query GetEvalCountByDateTemplate($dateTemplate: DateTemplate!) {
    getHomeEval {
      evalCountByDateTemplate(dateTemplate: $dateTemplate) {
        data
        start
        end
      }
    }
  }
`);

export const TotalEvalCount = () => {
  const title = '역대 총 평가 횟수';
  const { loading, error, data } = useQuery(GET_EVAL_COUNT_BY_DATE_TEMPLATE, {
    variables: { dateTemplate: DateTemplate.Total },
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

  const { data: totalEvalCount } = data.getHomeEval.evalCountByDateTemplate;
  const unit = '회';

  return (
    <DashboardContent title={title}>
      <NumberDefault number={totalEvalCount} unit={unit} />
    </DashboardContent>
  );
};
