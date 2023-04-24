import { gql } from '@/__generated__';
import { Spinner } from '@/components/common';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@/components/elements/DashboardContentView';
import { TextDefault } from '@/components/elements/DashboardContentView/Text';
import { numberWithUnitFormatter } from '@/utils/formatters';
import { useQuery } from '@apollo/client';

const GET_AVERAGE_FEEDBACK_LENGTH = gql(/* GraphQL */ `
  query getAverageFeedbackLength {
    getTotalPage {
      averageFeedbackLength
    }
  }
`);

export const AverageFeedbackLength = () => {
  const { loading, error, data } = useQuery(GET_AVERAGE_FEEDBACK_LENGTH);

  if (loading) return <Spinner />;
  if (error) return <ApolloBadRequest msg={error.message} />;
  if (!data) return <ApolloNotFound />;

  const { averageFeedbackLength } = data.getTotalPage;
  const unit = '자';

  return (
    <TextDefault text={numberWithUnitFormatter(averageFeedbackLength, unit)} />
  );
};
