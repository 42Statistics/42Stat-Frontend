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

const GET_AVERAGE_FINAL_MARK = gql(/* GraphQL */ `
  query getAverageFinalMark($uid: Int!) {
    getPersonalEvalPage(uid: $uid) {
      averageFinalMark
    }
  }
`);

export const AverageFinalMark = () => {
  const user = useAtomValue(userAtom);
  const title = '평균 평가 점수';
  const description = '평가자일 때';
  const { loading, error, data } = useQuery(GET_AVERAGE_FINAL_MARK, {
    variables: {
      uid: user.id,
    },
  });
  if (loading)
    return (
      <DashboardContent title={title} description={description}>
        <Loader />
      </DashboardContent>
    );
  if (error)
    return (
      <DashboardContent title={title} description={description}>
        <ApolloBadRequest msg={error.message} />
      </DashboardContent>
    );
  if (!data)
    return (
      <DashboardContent title={title} description={description}>
        <ApolloNotFound />
      </DashboardContent>
    );

  const { averageFinalMark } = data.getPersonalEvalPage;
  const unit = '점';

  return (
    <DashboardContent title={title} description={description}>
      <NumberDefault number={averageFinalMark} unit={unit} />
    </DashboardContent>
  );
};
