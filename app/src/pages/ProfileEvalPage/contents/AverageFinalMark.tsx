import { gql } from '@/__generated__';
import { Spinner } from '@/components/common';
import { TextDefault } from '@/components/elements/DashboardContentView/Text';
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

  const { averageFinalMark } = data.getPersonalEvalPage;

  return <TextDefault text={`${averageFinalMark}점`} />;
};
