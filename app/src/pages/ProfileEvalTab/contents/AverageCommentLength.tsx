import { gql } from '@/__generated__';
import { useQuery } from '@apollo/client';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@components/elements/DashboardContentView/Error';
import { NumberDefault } from '@components/elements/DashboardContentView/NumberDefault';
import { DashboardContent } from '@components/templates/DashboardContent';
import { useParams } from 'react-router-dom';

const GET_AVERAGE_COMMENT_LENGTH_BY_LOGIN = gql(/* GraphQL */ `
  query GetAverageCommentLengthByLogin($login: String!) {
    getPersonalEval(login: $login) {
      averageCommentLength
    }
  }
`);

export const AverageCommentLength = () => {
  const { username } = useParams() as { username: string };

  const title = '평균 코멘트 길이';
  const { loading, error, data } = useQuery(
    GET_AVERAGE_COMMENT_LENGTH_BY_LOGIN,
    {
      variables: { login: username },
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
