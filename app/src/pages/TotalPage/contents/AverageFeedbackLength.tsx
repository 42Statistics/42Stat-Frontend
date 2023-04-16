import { gql } from '@/__generated__';
import { Spinner } from '@/components/common';
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
  if (error) {
    return <h1>{error.message}</h1>;
  }
  if (!data) {
    return <h1>user not found</h1>;
  }

  const { averageFeedbackLength } = data.getTotalPage;
  const unit = '자';

  return (
    <TextDefault text={numberWithUnitFormatter(averageFeedbackLength, unit)} />
  );
};
