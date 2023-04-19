import { gql } from '@/__generated__';
import { Spinner } from '@/components/common';
import { TextDefault } from '@/components/elements/DashboardContentView/Text';
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
      uid: 1,
    },
  });

  if (loading) return <Spinner />;
  if (error) {
    return <h1>{error.message}</h1>;
  }
  if (!data) {
    return <h1>user not found</h1>;
  }

  const { averageDuration } = data.getPersonalEvalPage;

  return <TextDefault text={`${averageDuration}분`} />;
};
