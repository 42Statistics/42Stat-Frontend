import { gql } from '@/__generated__';
import { DateTemplate } from '@/__generated__/graphql';
import { useQuery } from '@apollo/client';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@components/elements/DashboardContentView/Error';
import { NumberCompare } from '@components/elements/DashboardContentView/NumberCompare';
import { DashboardContent } from '@components/templates/DashboardContent';
import dayjs from 'dayjs';

const GET_BLACKHOLED_COUNT_BY_DATE_TEMPLATE = gql(/* GraphQL */ `
  query GetBlackholedCountByDateTemplate(
    $currDateTemplate: DateTemplate!
    $lastDateTemplate: DateTemplate!
  ) {
    getHomeUser {
      currData: blackholedCountByDateTemplate(dateTemplate: $currDateTemplate) {
        data
        start
        end
      }
      lastData: blackholedCountByDateTemplate(dateTemplate: $lastDateTemplate) {
        data
        start
        end
      }
    }
  }
`);

export const MonthlyBlackholedCount = () => {
  const title = '월간 누적 블랙홀 인원';
  const { loading, error, data } = useQuery(
    GET_BLACKHOLED_COUNT_BY_DATE_TEMPLATE,
    {
      variables: {
        currDateTemplate: DateTemplate.CurrMonth,
        lastDateTemplate: DateTemplate.LastMonth,
      },
    },
  );
  if (loading) return <DashboardContentLoading title={title} />;
  if (error)
    return <DashboardContentBadRequest title={title} message={error.message} />;
  if (!data) return <DashboardContentNotFound title={title} />;

  const {
    currData: { data: currBlackholedCount, start, end },
    lastData: { data: lastBlackholedCount },
  } = data.getHomeUser;

  const description = `${dayjs(start).format('M월 D일')} ~ ${dayjs(end).format(
    'M월 D일',
  )}`;
  const unit = '명';

  return (
    <DashboardContent title={title} description={description}>
      <NumberCompare
        curr={currBlackholedCount}
        last={lastBlackholedCount}
        unit={unit}
      />
    </DashboardContent>
  );
};
