import { useQuery } from '@apollo/client';
import { gql } from '@shared/__generated__';
import { DashboardContent } from '@shared/components/DashboardContent';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@shared/components/DashboardContentView/Error';
import { NumberDefault } from '@shared/components/DashboardContentView/Number/NumberDefault';
import { InfoTooltip } from '@shared/components/InfoTooltip';

const GET_AVERAGE_COMMENT_LENGTH = gql(/* GraphQL */ `
  query GetAverageCommentLength {
    getHomeEval {
      averageCommentLength
    }
  }
`);

export const AverageCommentLength = () => {
  const title = '평균 코멘트 글자수';
  const { loading, error, data } = useQuery(GET_AVERAGE_COMMENT_LENGTH);

  if (loading) {
    return <DashboardContentLoading title={title} />;
  }
  if (error) {
    return <DashboardContentBadRequest title={title} message={error.message} />;
  }
  if (!data) {
    return <DashboardContentNotFound title={title} />;
  }

  const { averageCommentLength } = data.getHomeEval;
  const unit = '자';

  return (
    <DashboardContent
      title={title}
      titleRight={<InfoTooltip text="코멘트 : 평가하러 가서 작성한 리뷰" />}
    >
      <NumberDefault number={averageCommentLength} unit={unit} />
    </DashboardContent>
  );
};
