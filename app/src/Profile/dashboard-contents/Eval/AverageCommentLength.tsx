import { useQuery } from '@apollo/client';
import { gql } from '@shared/__generated__';
import { DashboardContent } from '@shared/components/DashboardContent';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@shared/components/DashboardContentView/Error';
import { NumberDefault } from '@shared/components/DashboardContentView/Number/NumberDefault';
import { useParams } from 'react-router-dom';

const GET_AVERAGE_COMMENT_LENGTH_BY_LOGIN = gql(/* GraphQL */ `
  query GetAverageCommentLengthByLogin($login: String!) {
    getPersonalEval(login: $login) {
      averageCommentLength
    }
  }
`);

export const AverageCommentLength = () => {
  const { login } = useParams() as { login: string };

  const title = '평균 코멘트 글자수';
  const { loading, error, data } = useQuery(
    GET_AVERAGE_COMMENT_LENGTH_BY_LOGIN,
    {
      variables: { login },
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

  const { averageCommentLength } = data.getPersonalEval;
  const unit = '자';

  return (
    <DashboardContent title={title}>
      <NumberDefault number={averageCommentLength} unit={unit} />
    </DashboardContent>
  );
};
