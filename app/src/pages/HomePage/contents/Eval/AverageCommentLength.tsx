import { gql } from '@/__generated__';
import { useQuery } from '@apollo/client';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@components/elements/DashboardContentView/Error';
import { NumberDefault } from '@components/elements/DashboardContentView/NumberDefault';
import { DashboardContent } from '@components/templates/DashboardContent';

const GET_AVERAGE_COMMENT_LENGTH = gql(/* GraphQL */ `
  query GetAverageCommentLength {
    getHomeEval {
      averageCommentLength
    }
  }
`);

export const AverageCommentLength = () => {
  const title = '평균 코멘트 길이';
  const { loading, error, data } = useQuery(GET_AVERAGE_COMMENT_LENGTH);
  if (loading) return <DashboardContentLoading />;
  if (error) return <DashboardContentBadRequest message={error.message} />;
  if (!data) return <DashboardContentNotFound />;

  const { averageCommentLength } = data.getHomeEval;
  const unit = '자';

  return (
    <DashboardContent title={title}>
      <NumberDefault number={averageCommentLength} unit={unit} />
    </DashboardContent>
  );
};
