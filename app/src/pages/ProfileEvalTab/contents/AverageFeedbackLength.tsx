import { gql } from '@/__generated__';
import { Loader } from '@/components/common';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@/components/elements/DashboardContentView';
import { NumberDefault } from '@/components/elements/DashboardContentView/Text';
import { DashboardContent } from '@/components/templates/Dashboard';
import { useQuery } from '@apollo/client';

const GET_PERSONAL_AVERAGE_FEEDBACK_LENGTH = gql(/* GraphQL */ `
  query getPersonalAverageFeedbackLength($uid: Int!) {
    getPersonalEvalPage(uid: $uid) {
      averageFeedbackLength
    }
  }
`);

export const AverageFeedbackLength = () => {
  const title = '평균 피드백 길이';
  const { loading, error, data } = useQuery(
    GET_PERSONAL_AVERAGE_FEEDBACK_LENGTH,
    {
      variables: {
        uid: 99947,
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

  const { averageFeedbackLength } = data.getPersonalEvalPage;
  const unit = '자';

  return (
    <DashboardContent title={title}>
      <NumberDefault number={averageFeedbackLength} unit={unit} />
    </DashboardContent>
  );
};
