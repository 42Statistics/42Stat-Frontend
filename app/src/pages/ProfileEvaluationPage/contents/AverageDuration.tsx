import { gql } from '@/__generated__';
import { Spinner } from '@/components/common';
import { TextDefault } from '@/components/elements/DashboardContentView/Text';
import { useQuery } from '@apollo/client';

const GET_AVERAGE_DURATION = gql(/* GraphQL */ `
  query getAverageDuration {
    getPersonalEvalPage {
      evalProfile {
        averageDuration
      }
    }
  }
`);

export const AverageDuration = () => {
  const { loading, error, data } = useQuery(GET_AVERAGE_DURATION);

  if (loading) return <Spinner />;
  if (error) {
    return <h1>{error.message}</h1>;
  }
  if (!data) {
    return <h1>user not found</h1>;
  }

  const { averageDuration } = data.getPersonalEvalPage.evalProfile;

  return <TextDefault text={`${averageDuration}분`} />;
};
