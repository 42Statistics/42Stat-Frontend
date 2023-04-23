import { gql } from '@/__generated__';
import { Spinner } from '@/components/common';
import { TextDefault } from '@/components/elements/DashboardContentView/Text';
import { numberWithUnitFormatter } from '@/utils/formatters';
import { useQuery } from '@apollo/client';

// TODO: getPersonGeneralPage -> getPersonEvaluationPage
const GET_PERSONAL_TOTAL_EVAL_CNT = gql(/* GraphQL */ `
  query getPersonalTotalEvalCnt($uid: Int!) {
    getPersonalEvalPage(uid: $uid) {
      totalCount
    }
  }
`);

export const TotalEvalCnt = () => {
  const { loading, error, data } = useQuery(GET_PERSONAL_TOTAL_EVAL_CNT, {
    variables: { uid: 99947 },
  });

  if (loading) return <Spinner />;
  if (error) {
    return <h1>{error.message}</h1>;
  }
  if (!data) {
    return <h1>user not found</h1>;
  }

  const { totalCount } = data.getPersonalEvalPage;
  const unit = '회';

  return <TextDefault text={numberWithUnitFormatter(totalCount, unit)} />;
};
