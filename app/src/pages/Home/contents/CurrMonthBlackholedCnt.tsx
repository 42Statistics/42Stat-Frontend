import { gql } from '@/__generated__';
import { useQuery } from '@apollo/client';
import { TextDefault } from '@/components/elements/DashboardContentView/Text/TextDefault';
import { Spinner } from '@/components/common';

const GET_CURR_MONTH_BLACKHOLED_CNT = gql(/* GraphQL */ `
  query GetCurrMonthBlackholedCnt {
    getHomePage {
      currMonthBlackholedCnt
      lastMonthBlackholedCnt
    }
  }
`);

export const CurrMonthBlackholedCnt = () => {
  const { loading, error, data } = useQuery(GET_CURR_MONTH_BLACKHOLED_CNT);

  if (loading) return <Spinner />;
  if (error) {
    return <h1>{error.message}</h1>;
  }
  if (!data) {
    return <h1>user not found</h1>;
  }

  const { currMonthBlackholedCnt } = data.getHomePage;

  return <TextDefault text={`${currMonthBlackholedCnt.toLocaleString()}명`} />;
};
