import { gql } from '@/__generated__';
import { Spinner } from '@/components/common';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@/components/elements/DashboardContentView';
import { NumberDefault } from '@/components/elements/DashboardContentView/Text';
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
  if (error) return <ApolloBadRequest msg={error.message} />;
  if (!data) return <ApolloNotFound />;

  const { totalCount } = data.getPersonalEvalPage;
  const unit = '회';

  return <NumberDefault number={totalCount} unit={unit} />;
};
