import { useQuery } from '@apollo/client';
import { gql } from '@shared/__generated__';
import { DateTemplate } from '@shared/__generated__/graphql';
import { DashboardContent } from '@shared/components/DashboardContent';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@shared/components/DashboardContentView/Error';
import { NumberDefault } from '@shared/components/DashboardContentView/NumberDefault';

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
  if (loading) {
    return <DashboardContentLoading title={title} />;
  }
  if (error) {
    return <DashboardContentBadRequest title={title} message={error.message} />;
  }
  if (!data) {
    return <DashboardContentNotFound title={title} />;
  }

  const { data: totalEvalCount } = data.getHomeEval.evalCountByDateTemplate;
  const unit = '회';

  return (
    <DashboardContent title={title}>
      <NumberDefault number={totalEvalCount} unit={unit} />
    </DashboardContent>
  );
};
