import { gql } from '@/__generated__';
import { Spinner } from '@/components/common';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@/components/elements/DashboardContentView';
import { TextDefault } from '@/components/elements/DashboardContentView/Text';
import { numberWithUnitFormatter } from '@/utils/formatters';
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

  if (loading) return <Spinner />;
  if (error) return <ApolloBadRequest msg={error.message} />;
  if (!data) return <ApolloNotFound />;

  const { averageDuration } = data.getPersonalEvalPage;
  const unit = '분';

  return <TextDefault text={numberWithUnitFormatter(averageDuration, unit)} />;
};
