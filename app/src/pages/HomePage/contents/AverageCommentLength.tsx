import { gql } from '@/__generated__';
import { Loader } from '@/components/common';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@/components/elements/DashboardContentView';
import { NumberDefault } from '@/components/elements/DashboardContentView/Text';
import { useQuery } from '@apollo/client';

const GET_AVERAGE_COMMENT_LENGTH = gql(/* GraphQL */ `
  query getAverageCommentLength {
    getTotalPage {
      averageCommentLength
    }
  }
`);

export const AverageCommentLength = () => {
  const { loading, error, data } = useQuery(GET_AVERAGE_COMMENT_LENGTH);

  if (loading) return <Loader />;
  if (error) return <ApolloBadRequest msg={error.message} />;
  if (!data) return <ApolloNotFound />;

  const { averageCommentLength } = data.getTotalPage;
  const unit = '자';

  return <NumberDefault number={averageCommentLength} unit={unit} />;
};
