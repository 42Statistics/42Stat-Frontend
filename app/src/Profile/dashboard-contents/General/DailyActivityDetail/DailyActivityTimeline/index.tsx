import { useContext } from 'react';

import { useTheme } from '@emotion/react';
import { useQuery } from '@apollo/client';
import { useAtomValue } from 'jotai';

import { gql } from '@shared/__generated__';
import { DashboardContent } from '@shared/components/DashboardContent';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
} from '@shared/components/DashboardContentView/Error';
import { VStack } from '@shared/ui-kit';

import { selectedDailyActivityAtom } from '@/Profile/dashboard-contents/General/atoms/selectedDailyActivityAtom';
import { parseDailyActivity } from '@/Profile/dashboard-contents/General/DailyActivityDetail/utils/parseDailyActivity';
import { UserProfileContext } from '@/Profile/contexts/UserProfileContext';

import { DailyCorrected } from './DailyCorrected';
import { DailyCorrector } from './DailyCorrector';
import { DailyEvent } from './DailyEvent';
import { DailyLogTime } from './DailyLogTime';

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

type DailyActivityTimelineProps = {
  title: string;
  description: string;
};

export const DailyActivityTimeline = ({
  title,
  description,
}: DailyActivityTimelineProps) => {
  const theme = useTheme();
  const { coalition } = useContext(UserProfileContext);
  const color = coalition?.color ?? theme.colors.mono.black;
  const { login } = useContext(UserProfileContext);
  const { records } = useAtomValue(selectedDailyActivityAtom);
  const { dailyRecords, dailyLogtime } = parseDailyActivity(records);

  const { loading, error, data } = useQuery(GET_DAILY_ACTIVITY_DETAIL_RECORDS, {
    variables: {
      login,
      args: dailyRecords,
    },
  });

  if (loading) {
    return <DashboardContentLoading title={title} description={description} />;
  }
  if (error) {
    <DashboardContentBadRequest title={title} description={description} />;
  }
  // TODO: 왜 이 조건을 넣으면 NotFound에서 변하지 않는지 모르겠음
  // if (!data) {
  //   return <DashboardContentNotFound title={title} description={description} />;
  // }

  return (
    <DashboardContent title={title} description={description} type="Scrollable">
      <VStack w="100%" align="start">
        <DailyLogTime dailyLogtime={dailyLogtime} color={color} />
        {data?.getPersonalGeneral.dailyActivityDetailRecords.map(
          (item, index) => {
            if ('teamId' in item) {
              if (item.type === 'CORRECTED')
                return <DailyCorrected key={index} data={item} color={color} />;
              else
                return <DailyCorrector key={index} data={item} color={color} />;
            } else {
              return <DailyEvent key={index} data={item} color={color} />;
            }
          },
        )}
      </VStack>
    </DashboardContent>
  );
};
