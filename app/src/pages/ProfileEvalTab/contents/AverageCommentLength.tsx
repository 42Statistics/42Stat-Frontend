import { gql } from '@/__generated__';
import { Loader } from '@/components/common';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@/components/elements/DashboardContentView';
import { NumberDefault } from '@/components/elements/DashboardContentView/Text';
import { DashboardContent } from '@/components/templates/Dashboard';
import { useQuery } from '@apollo/client';

const GET_PERSONAL_AVERAGE_COMMENT_LENGTH = gql(/* GraphQL */ `
  query getPersonalAverageCommentLength($uid: Int!) {
    getPersonalEvalPage(uid: $uid) {
      averageCommentLength
    }
  }
`);

export const AverageCommentLength = () => {
  const { loading, error, data } = useQuery(
    GET_PERSONAL_AVERAGE_COMMENT_LENGTH,
    {
      variables: {
        uid: 99947,
      },
    },
  );

  if (loading) return <Loader />;
  if (error) return <ApolloBadRequest msg={error.message} />;
  if (!data) return <ApolloNotFound />;

  const { averageCommentLength } = data.getPersonalEvalPage;

  const title = '평균 코멘트 길이';
  const unit = '자';

  return (
    <DashboardContent title={title}>
      <NumberDefault number={averageCommentLength} unit={unit} />
    </DashboardContent>
  );
};
