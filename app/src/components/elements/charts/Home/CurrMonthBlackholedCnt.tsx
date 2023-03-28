import { gql, useQuery } from '@apollo/client';

const GET_CURR_NONTH_BLACKHOLED = gql`
  query {
    getHomePage {
      currMonthBlackholedCnt
      lastMonthBlackholedCnt
    }
  }
`;

export const CurrMonthBlackholedCnt = () => {
  const { loading, error, data } = useQuery(GET_CURR_NONTH_BLACKHOLED);
  if (loading) {
    return <h1>loading...</h1>;
  }

  if (error) {
    return <h1>{error.message}</h1>;
  }

  if (!data) {
    return <h1>user not found</h1>;
  }
  return (
    <>
      {data.getHomePage.currMonthBlackholedCnt}
      //
      {data.getHomePage.lastMonthBlackholedCnt}
    </>
  );
};
