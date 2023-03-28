import { gql, useQuery } from '@apollo/client';

const GET_CURWEEK_EVAL = gql`
  query {
    getHomePage {
      currWeekEvalCnt
      lastWeekEvalCnt
    }
  }
`;
export const CurrWeekEvalCnt = () => {
  const { loading, error, data } = useQuery(GET_CURWEEK_EVAL);
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
      {data.getHomePage.currWeekEvalCnt}
      //
      {data.getHomePage.lastWeekEvalCnt}
    </>
  );
};
