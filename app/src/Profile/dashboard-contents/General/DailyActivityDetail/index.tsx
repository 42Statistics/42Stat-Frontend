import { useContext } from 'react';

import { useTheme } from '@emotion/react';
import dayjs from 'dayjs';
import { useAtomValue } from 'jotai';

import { DashboardContent } from '@shared/components/DashboardContent';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
} from '@shared/components/DashboardContentView/Error';
import { Body1Text, VStack } from '@shared/ui-kit';

import { UserProfileContext } from '@/Profile/contexts/UserProfileContext';
import { dailyActivityErrorAtom } from '@/Profile/dashboard-contents/General/atoms/dailyActivityErrorAtom';
import { selectedDailyActivityAtom } from '@/Profile/dashboard-contents/General/atoms/selectedDailyActivityAtom';

import { DailyActivityTimeline } from './DailyActivityTimeline';
import { parseDailyActivity } from './utils/parseDailyActivity';
import { DailyLogTime } from './DailyActivityTimeline/DailyLogTime';

export const DailyActivityDetail = () => {
  const theme = useTheme();
  const { login } = useContext(UserProfileContext);
  const { coalition } = useContext(UserProfileContext);
  const dailyActivityError = useAtomValue(dailyActivityErrorAtom);

  const {
    date,
    records,
    login: activityLogin,
  } = useAtomValue(selectedDailyActivityAtom);
  const color = coalition?.color ?? theme.colors.mono.black;
  const { dailyRecords, dailyLogtime } = parseDailyActivity(records);

  const title = '일별 활동 내역';
  const description = dayjs(date).format('YYYY년 M월 D일');

  if (dailyActivityError) {
    return (
      <DashboardContentBadRequest
        title={title}
        message={dailyActivityError.message}
      />
    );
  }

  if (date === '' || activityLogin !== login) {
    return <DashboardContentLoading title={title} />;
  }

  if (records.length === 0) {
    return (
      <DashboardContent title={title} description={description}>
        <Body1Text>해당일에 활동 내역이 없습니다.</Body1Text>
      </DashboardContent>
    );
  }

  // useQuery를 조건부로 사용할 수 없기 때문에, date === '', records.length === 0 등의 조건을 먼저 검사하고,
  // 데이터가 정제된 상태로 하위 컴포넌트인 DailyActivityTimeline 내에서 useQuery를 사용하도록 해야 합니다.
  return (
    <DashboardContent title={title} description={description} type="Scrollable">
      <VStack w="100%" h="100%" justify="start" align="start">
        <DailyLogTime dailyLogtime={dailyLogtime} color={color} />
        {dailyRecords.length !== 0 && (
          <DailyActivityTimeline dailyRecords={dailyRecords} />
        )}
      </VStack>
    </DashboardContent>
  );
};
