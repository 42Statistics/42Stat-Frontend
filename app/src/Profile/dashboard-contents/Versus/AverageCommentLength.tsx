import { useQuery } from '@apollo/client';
import { gql } from '@shared/__generated__';
import { userAtom } from '@shared/atoms/userAtom';
import { DashboardContent } from '@shared/components/DashboardContent';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@shared/components/DashboardContentView/Error';
import { NumberVersus } from '@shared/components/DashboardContentView/Number/NumberVersus';
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
  const { login } = useParams() as { login: string };
  const user = useAtomValue(userAtom);

  const title = '평균 코멘트 길이';
  const { loading, error, data } = useQuery(GET_AVERAGE_COMMENT_LENGTH_VERSUS, {
    variables: { login1: login, login2: user.login },
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
      <NumberVersus
        number1={averageCommentLength}
        number2={myAverageCommentLength}
        unit={unit}
      />
    </DashboardContent>
  );
};
