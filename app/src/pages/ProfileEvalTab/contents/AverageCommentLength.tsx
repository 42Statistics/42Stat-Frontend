import { gql } from '@/__generated__';
import { useQuery } from '@apollo/client';
import { Loader } from '@components/common';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@components/elements/DashboardContentView';
import { NumberDefault } from '@components/elements/DashboardContentView/Text';
import { DashboardContent } from '@components/templates/DashboardContent';
import { useParams } from 'react-router-dom';

const GET_PERSONAL_AVERAGE_COMMENT_LENGTH = gql(/* GraphQL */ `
  query getPersonalAverageCommentLength($login: String!) {
    getPersonalEvalPage(login: $login) {
      averageCommentLength
    }
  }
`);

export const AverageCommentLength = () => {
  const { username } = useParams() as { username: string };

  const title = '평균 코멘트 길이';
  const { loading, error, data } = useQuery(
    GET_PERSONAL_AVERAGE_COMMENT_LENGTH,
    {
      variables: { login: username },
    },
  );
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

  const { averageCommentLength } = data.getPersonalEvalPage;
  const unit = '자';

  return (
    <DashboardContent title={title}>
      <NumberDefault number={averageCommentLength} unit={unit} />
    </DashboardContent>
  );
};
