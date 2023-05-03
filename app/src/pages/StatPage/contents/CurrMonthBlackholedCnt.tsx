import { gql } from '@/__generated__';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@/components/elements/DashboardContentView';
import { NumberCompare } from '@/components/elements/DashboardContentView/Text';
import { useQuery } from '@apollo/client';

const GET_CURR_MONTH_BLACKHOLED_CNT = gql(/* GraphQL */ `
  query GetCurrMonthBlackholedCnt {
    getHomePage {
      currMonthBlackholedCnt {
        data
        from
        to
      }
      lastMonthBlackholedCnt {
        data
        from
        to
      }
    }
  }
`);

export const CurrMonthBlackholedCnt = () => {
  const { loading, error, data } = useQuery(GET_CURR_MONTH_BLACKHOLED_CNT);

  if (loading) return <></>;
  if (error) return <ApolloBadRequest msg={error.message} />;
  if (!data) return <ApolloNotFound />;

  const { currMonthBlackholedCnt, lastMonthBlackholedCnt } = data.getHomePage;
  const unit = '명';

  return (
    <NumberCompare
      curr={currMonthBlackholedCnt.data}
      last={lastMonthBlackholedCnt.data}
      unit={unit}
    />
  );
};
