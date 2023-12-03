import { useQuery } from '@apollo/client';
import dayjs from 'dayjs';
import { useAtomValue } from 'jotai';
import { useContext, useEffect } from 'react';

import { UserProfileContext } from '@/Profile/contexts/UserProfileContext';
import { DailyActivityTimeline } from '@/Profile/dashboard-contents/General/DailyActivityDetail/DailyActivityTimeline';
import { gql } from '@shared/__generated__';
import { DashboardContent } from '@shared/components/DashboardContent';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
} from '@shared/components/DashboardContentView/Error';
import { dailyActivityAtom } from '../atoms/dailyActivityAtom';
import { parseDailyActivity } from './utils/parseDailyActivity';

const GET_DAILY_ACTIVITY_DETAIL_RECORDS = gql(/* GraphQL */ `
  query GetDailyActivityDetailRecords(
    $login: String!
    $args: [DailyActivityDetailRecordIdWithType!]!
  ) {
    getPersonalGeneral(login: $login) {
      dailyActivityDetailRecords(args: $args) {
        ... on DailyEventDetailRecord {
          name
          location
          beginAt
          endAt
        }
        ... on DailyEvaluationDetailRecord {
          type
          teamId
          correctorLogin
          leaderLogin
          projectName
          beginAt
          filledAt
        }
      }
    }
  }
`);

export const DailyActivityDetail = () => {
  const { login } = useContext(UserProfileContext);
  const { date, records } = useAtomValue(dailyActivityAtom);
  const { dailyRecords, timeRecord } = parseDailyActivity(records);

  const title = '일별 활동 내역';

  const { loading, error, data, refetch } = useQuery(
    GET_DAILY_ACTIVITY_DETAIL_RECORDS,
    {
      variables: {
        login,
        args: dailyRecords,
      },
    },
  );

  useEffect(() => {
    if (dailyRecords.length === 0) return;
    refetch({ login, args: dailyRecords });
  }, [refetch, login, dailyRecords]);

  if (loading) {
    return <DashboardContentLoading title={title} />;
  }
  if (error) {
    return <DashboardContentBadRequest title={title} message={error.message} />;
  }

  return (
    <DashboardContent
      title={title}
      description={dayjs(date).format('YYYY년 M월 D일')}
      type="Scrollable"
    >
      <DailyActivityTimeline timeRecord={timeRecord} data={data} />
    </DashboardContent>
  );
};
