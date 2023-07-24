import { useQuery } from '@apollo/client';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@components/elements/DashboardContentView/Error';
import { NumberCompare } from '@components/elements/DashboardContentView/NumberCompare';
import { gql } from '@shared/__generated__';
import { DashboardContent } from '@shared/components/DashboardContent';
import { userAtom } from '@shared/utils/jotai/atoms/userAtom';
import { useAtomValue } from 'jotai';
import { useParams } from 'react-router-dom';

const GET_AVERAGE_COMMENT_LENGTH_VERSUS = gql(/* GraphQL */ `
  query GetAverageCommentLengthVersus($login1: String!, $login2: String!) {
    data1: getPersonalEval(login: $login1) {
      averageCommentLength
    }
    data2: getPersonalEval(login: $login2) {
      averageCommentLength
    }
  }
`);

export const AverageCommentLength = () => {
  const { username } = useParams() as { username: string };
  const user = useAtomValue(userAtom);

  const title = '평균 코멘트 길이';
  const { loading, error, data } = useQuery(GET_AVERAGE_COMMENT_LENGTH_VERSUS, {
    variables: { login1: username, login2: user.login },
  });

  if (loading) {
    return <DashboardContentLoading title={title} />;
  }
  if (error) {
    return <DashboardContentBadRequest title={title} />;
  }
  if (!data) {
    return <DashboardContentNotFound title={title} />;
  }

  const {
    data1: { averageCommentLength },
    data2: { averageCommentLength: myAverageCommentLength },
  } = data;
  const unit = '자';

  return (
    <DashboardContent title={title}>
      <NumberCompare
        curr={averageCommentLength}
        last={myAverageCommentLength}
        unit={unit}
      />
    </DashboardContent>
  );
};
