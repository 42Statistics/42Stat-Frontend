import { gql } from '@/__generated__';
import { DateTemplate } from '@/__generated__/graphql';
import { useQuery } from '@apollo/client';
import { Loader } from '@components/common';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@components/elements/DashboardContentView';
import { NumberCompare } from '@components/elements/DashboardContentView/Text';
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

export const CurrMonthBlackholedCount = () => {
  const title = '이번 달 누적 블랙홀 인원';
  const { loading, error, data } = useQuery(
    GET_BLACKHOLED_COUNT_BY_DATE_TEMPLATE,
    {
      variables: {
        currDateTemplate: DateTemplate.CurrWeek, // FIXME: CurrMonth로 수정. 현재 에러가 발생함.
        lastDateTemplate: DateTemplate.LastWeek,
      },
    },
  );
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

  const {
    currData: { data: currBlackholedcount, start },
    lastData: { data: lastBlackholedCount },
  } = data.getHomeUser;

  const description = `${dayjs(start).format('YYYY년 M월')}`;
  const unit = '명';

  return (
    <DashboardContent title={title} description={description}>
      <NumberCompare
        curr={currBlackholedcount}
        last={lastBlackholedCount}
        unit={unit}
      />
    </DashboardContent>
  );
};
