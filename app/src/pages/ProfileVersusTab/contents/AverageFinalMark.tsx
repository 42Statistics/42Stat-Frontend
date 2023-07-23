import { gql } from '@shared/__generated__';
import { useQuery } from '@apollo/client';
import { userAtom } from '@atoms/userAtom';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@components/elements/DashboardContentView/Error';
import { NumberCompare } from '@components/elements/DashboardContentView/NumberCompare';
import { DashboardContent } from '@components/templates/DashboardContent';
import { useAtomValue } from 'jotai';
import { useParams } from 'react-router-dom';

const GET_AVERAGE_FINAL_MARK_VERSUS = gql(/* GraphQL */ `
  query GetAverageFinalMarkVersus($login1: String!, $login2: String!) {
    data1: getPersonalEval(login: $login1) {
      averageFinalMark
    }
    data2: getPersonalEval(login: $login2) {
      averageFinalMark
    }
  }
`);

export const AverageFinalMark = () => {
  const { username } = useParams() as { username: string };
  const user = useAtomValue(userAtom);

  const title = '평균 평가 점수';
  const description = '평가자일 때';
  const { loading, error, data } = useQuery(GET_AVERAGE_FINAL_MARK_VERSUS, {
    variables: { login1: username, login2: user.login },
  });

  if (loading) {
    return <DashboardContentLoading title={title} description={description} />;
  }
  if (error) {
    return (
      <DashboardContentBadRequest title={title} description={description} />
    );
  }
  if (!data) {
    return <DashboardContentNotFound title={title} description={description} />;
  }

  const {
    data1: { averageFinalMark },
    data2: { averageFinalMark: myAverageFinalMark },
  } = data;
  const unit = '회';

  return (
    <DashboardContent title={title} description={description}>
      <NumberCompare
        curr={averageFinalMark}
        last={myAverageFinalMark}
        unit={unit}
      />
    </DashboardContent>
  );
};
