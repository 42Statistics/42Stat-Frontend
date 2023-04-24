import { gql } from '@/__generated__';
import { Spinner } from '@/components/common';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@/components/elements/DashboardContentView';
import { TextDefault } from '@/components/elements/DashboardContentView/Text';
import { numberWithUnitFormatter } from '@/utils/formatters';
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

  if (loading) return <Spinner />;
  if (error) return <ApolloBadRequest msg={error.message} />;
  if (!data) return <ApolloNotFound />;

  const { averageFinalMark } = data.getPersonalEvalPage;
  const unit = '점';

  return <TextDefault text={numberWithUnitFormatter(averageFinalMark, unit)} />;
};
