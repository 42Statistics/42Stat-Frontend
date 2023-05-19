import { gql } from '@/__generated__';
import { Loader } from '@/components/common';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@/components/elements/DashboardContentView';
import { NumberDefault } from '@/components/elements/DashboardContentView/Text';
import { DashboardContent } from '@/components/templates/Dashboard';
import { useQuery } from '@apollo/client';

const GET_PERSONAL_TOTAL_EVAL_CNT = gql(/* GraphQL */ `
  query getPersonalTotalEvalCnt($uid: Int!) {
    getPersonalEvalPage(uid: $uid) {
      totalCount
    }
  }
`);

export const TotalEvalCnt = () => {
  const title = '누적 평가 횟수';
  const { loading, error, data } = useQuery(GET_PERSONAL_TOTAL_EVAL_CNT, {
    variables: { uid: 99947 },
  });
  if (loading)
    return (
      <DashboardContent title={title}>
        <Loader />
      </DashboardContent>
    );
  if (error)
    return (
      <DashboardContent title={title}>
        <ApolloBadRequest msg={error.message} />
      </DashboardContent>
    );
  if (!data)
    return (
      <DashboardContent title={title}>
        <ApolloNotFound />
      </DashboardContent>
    );

  const { totalCount } = data.getPersonalEvalPage;
  const unit = '회';

  return (
    <DashboardContent title={title}>
      <NumberDefault number={totalCount} unit={unit} />
    </DashboardContent>
  );
};
