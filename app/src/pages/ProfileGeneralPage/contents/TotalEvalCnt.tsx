import { gql } from '@/__generated__';
import { Spinner } from '@/components/common';
import { TextDefault } from '@/components/elements/DashboardContentView/Text';
import { useQuery } from '@apollo/client';

const GET_PERSONAL_TOTAL_EVAL_CNT = gql(/* GraphQL */ `
  query getPersonalTotalEvalCnt {
    getPersonGeneralPage {
      evalUserInfo {
        totalEvalCnt
      }
    }
  }
`);

export const TotalEvalCnt = () => {
  const { loading, error, data } = useQuery(GET_PERSONAL_TOTAL_EVAL_CNT);

  if (loading) return <Spinner />;
  if (error) {
    return <h1>{error.message}</h1>;
  }
  if (!data) {
    return <h1>user not found</h1>;
  }

  const { totalEvalCnt } = data.getPersonGeneralPage.evalUserInfo;

  return <TextDefault text={`${totalEvalCnt}회`} />;
};
