import { gql } from '@/__generated__';
import { useQuery } from '@apollo/client';
import { Loader } from '@components/common';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@components/elements/DashboardContentView';
import { NumberCompare } from '@components/elements/DashboardContentView/Text';
import { DashboardContent } from '@components/templates/DashboardContent';
import dayjs from 'dayjs';

const GET_CURR_MONTH_BLACKHOLED_COUNT = gql(/* GraphQL */ `
  query GetCurrMonthBlackholedCount {
    getHomeUser {
      currMonthBlackholedCount: blackholedCountByDateTemplate(
        dateTemplate: CURR_WEEK
      ) {
        data
        start
        end
      }
      lastMonthBlackholedCount: blackholedCountByDateTemplate(
        dateTemplate: LAST_WEEK
      ) {
        data
        start
        end
      }
    }
  }
`);

export const CurrMonthBlackholedCount = () => {
  const title = '이번 달 누적 블랙홀 인원';
  const { loading, error, data } = useQuery(GET_CURR_MONTH_BLACKHOLED_COUNT);
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

  const { currMonthBlackholedCount, lastMonthBlackholedCount } =
    data.getHomeUser;
  const { start, end } = currMonthBlackholedCount;

  const description = `${dayjs(start).format('YYYY년 M월')}`;
  const unit = '명';

  return (
    <DashboardContent title={title} description={description}>
      <NumberCompare
        curr={currMonthBlackholedCount.data}
        last={lastMonthBlackholedCount.data}
        unit={unit}
      />
    </DashboardContent>
  );
};
