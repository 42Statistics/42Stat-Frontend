import { gql } from '@/__generated__';
import { Loader } from '@/components/common';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@/components/elements/DashboardContentView';
import { NumberDefault } from '@/components/elements/DashboardContentView/Text';
import { DashboardContent } from '@/components/templates/Dashboard';
import { userAtom } from '@/utils/atoms/userAtom';
import { useQuery } from '@apollo/client';
import { useAtomValue } from 'jotai';

const GET_PERSONAL_AVERAGE_COMMENT_LENGTH = gql(/* GraphQL */ `
  query getPersonalAverageCommentLength($uid: Int!) {
    getPersonalEvalPage(uid: $uid) {
      averageCommentLength
    }
  }
`);

export const AverageCommentLength = () => {
  const user = useAtomValue(userAtom);
  const title = '평균 코멘트 길이';
  const { loading, error, data } = useQuery(
    GET_PERSONAL_AVERAGE_COMMENT_LENGTH,
    {
      variables: {
        uid: user.id,
      },
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
