import { gql } from '@/__generated__';
import { CompareBoard } from '@/components/elements/compareBoard/CompareBoard';
import { useQuery } from '@apollo/client';
import { useTheme } from '@emotion/react';

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
  const theme = useTheme();

  if (loading) {
    return <h1>loading...</h1>;
  }
  if (error) {
    return <h1>{error.message}</h1>;
  }
  if (!data) {
    return <h1>user not found</h1>;
  }

  const { currMonthBlackholedCnt, lastMonthBlackholedCnt } = data.getHomePage;

  return (
    <>
      <CompareBoard
        curr={currMonthBlackholedCnt}
        last={lastMonthBlackholedCnt}
        unit="명"
      />
    </>
  );
};
