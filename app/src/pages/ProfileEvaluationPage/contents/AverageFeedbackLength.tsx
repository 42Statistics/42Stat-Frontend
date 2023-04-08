import { gql } from '@/__generated__';
import { Spinner } from '@/components/common';
import { TextDefault } from '@/components/elements/DashboardContentView/Text';
import { useQuery } from '@apollo/client';

const GET_PERSONAL_AVERAGE_FEEDBACK_LENGTH = gql(/* GraphQL */ `
  query getPersonalAverageFeedbackLength {
    getPersonalEvalPage {
      evalProfile {
        averageFeedbackLength
      }
    }
  }
`);

export const AverageFeedbackLength = () => {
  const { loading, error, data } = useQuery(
    GET_PERSONAL_AVERAGE_FEEDBACK_LENGTH,
  );

  if (loading) return <Spinner />;
  if (error) {
    return <h1>{error.message}</h1>;
  }
  if (!data) {
    return <h1>user not found</h1>;
  }

  const { averageFeedbackLength } = data.getPersonalEvalPage.evalProfile;

  return <TextDefault text={`${averageFeedbackLength}자`} />;
};
