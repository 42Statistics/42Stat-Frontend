import { gql } from '@/__generated__';
import { Loader } from '@/components/common';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@/components/elements/DashboardContentView';
import { NumberCompare } from '@/components/elements/DashboardContentView/Text';
import { DashboardContent } from '@/components/templates/Dashboard';
import { useQuery } from '@apollo/client';
import dayjs from 'dayjs';

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
  const title = '이번 달 누적 블랙홀 인원';
  const { loading, error, data } = useQuery(GET_CURR_MONTH_BLACKHOLED_CNT);
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

  const { currMonthBlackholedCnt, lastMonthBlackholedCnt } = data.getHomePage;
  const { from, to } = currMonthBlackholedCnt;

  const description = `${dayjs(from).format('YYYY년 M월')}`;
  const unit = '명';

  return (
    <DashboardContent title={title} description={description}>
      <NumberCompare
        curr={currMonthBlackholedCnt.data}
        last={lastMonthBlackholedCnt.data}
        unit={unit}
      />
    </DashboardContent>
  );
};
