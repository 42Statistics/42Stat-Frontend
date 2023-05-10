import { gql } from '@/__generated__';
import { Loader } from '@/components/common';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@/components/elements/DashboardContentView';
import { NumberDefault } from '@/components/elements/DashboardContentView/Text';
import { DashboardContent } from '@/components/templates/Dashboard';
import { useQuery } from '@apollo/client';

const GET_AVERAGE_DURATION = gql(/* GraphQL */ `
  query getAverageDuration($uid: Int!) {
    getPersonalEvalPage(uid: $uid) {
      averageDuration
    }
  }
`);

export const AverageDuration = () => {
  const { loading, error, data } = useQuery(GET_AVERAGE_DURATION, {
    variables: {
      uid: 99947,
    },
  });

  if (loading) return <Loader />;
  if (error) return <ApolloBadRequest msg={error.message} />;
  if (!data) return <ApolloNotFound />;

  const { averageDuration } = data.getPersonalEvalPage;

  const title = '평균 평가 시간';
  const description = '(평가자일 때만)';
  const unit = '분';

  return (
    <DashboardContent title={title} description={description}>
      <NumberDefault number={averageDuration} unit={unit} />
    </DashboardContent>
  );
};
