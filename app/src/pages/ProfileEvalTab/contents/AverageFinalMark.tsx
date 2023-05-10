import { gql } from '@/__generated__';
import { Loader } from '@/components/common';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@/components/elements/DashboardContentView';
import { NumberDefault } from '@/components/elements/DashboardContentView/Text';
import { DashboardContent } from '@/components/templates/Dashboard';
import { useQuery } from '@apollo/client';

const GET_AVERAGE_FINAL_MARK = gql(/* GraphQL */ `
  query getAverageFinalMark($uid: Int!) {
    getPersonalEvalPage(uid: $uid) {
      averageFinalMark
    }
  }
`);

export const AverageFinalMark = () => {
  const { loading, error, data } = useQuery(GET_AVERAGE_FINAL_MARK, {
    variables: {
      uid: 99947,
    },
  });

  if (loading) return <Loader />;
  if (error) return <ApolloBadRequest msg={error.message} />;
  if (!data) return <ApolloNotFound />;

  const { averageFinalMark } = data.getPersonalEvalPage;

  const title = '평균 평가 점수';
  const description = '(평가자일 때만)';
  const unit = '점';

  return (
    <DashboardContent title={title} description={description}>
      <NumberDefault number={averageFinalMark} unit={unit} />
    </DashboardContent>
  );
};
