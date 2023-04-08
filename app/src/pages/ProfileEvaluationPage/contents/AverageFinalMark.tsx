import { gql } from '@/__generated__';
import { Spinner } from '@/components/common';
import { TextDefault } from '@/components/elements/DashboardContentView/Text';
import { useQuery } from '@apollo/client';

const GET_AVERAGE_FINAL_MARK = gql(/* GraphQL */ `
  query getAverageFinalMark {
    getPersonalEvalPage {
      evalProfile {
        averageFinalMark
      }
    }
  }
`);

export const AverageFinalMark = () => {
  const { loading, error, data } = useQuery(GET_AVERAGE_FINAL_MARK);

  if (loading) return <Spinner />;
  if (error) {
    return <h1>{error.message}</h1>;
  }
  if (!data) {
    return <h1>user not found</h1>;
  }

  const { averageFinalMark } = data.getPersonalEvalPage.evalProfile;

  return <TextDefault text={`${averageFinalMark}점`} />;
};
