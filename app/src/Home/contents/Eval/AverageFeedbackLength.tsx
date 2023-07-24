import { useQuery } from '@apollo/client';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@components/elements/DashboardContentView/Error';
import { NumberDefault } from '@components/elements/DashboardContentView/NumberDefault';
import { gql } from '@shared/__generated__';
import { DashboardContent } from '@shared/components/DashboardContent';

const GET_AVERAGE_FEEDBACK_LENGTH = gql(/* GraphQL */ `
  query GetAverageFeedbackLength {
    getHomeEval {
      averageFeedbackLength
    }
  }
`);

export const AverageFeedbackLength = () => {
  const title = '평균 피드백 길이';
  const { loading, error, data } = useQuery(GET_AVERAGE_FEEDBACK_LENGTH);

  if (loading) {
    return <DashboardContentLoading title={title} />;
  }
  if (error) {
    return <DashboardContentBadRequest title={title} message={error.message} />;
  }
  if (!data) {
    return <DashboardContentNotFound title={title} />;
  }

  const { averageFeedbackLength } = data.getHomeEval;
  const unit = '자';

  return (
    <DashboardContent title={title}>
      <NumberDefault number={averageFeedbackLength} unit={unit} />
    </DashboardContent>
  );
};
