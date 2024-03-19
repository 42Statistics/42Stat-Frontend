import { DashboardSkeleton } from '@shared/components/DashboardSkeleton';
import { H2BoldText, VStack } from '@shared/ui-kit';

import { statCircleDashboardRows } from '@/Stat/dashboard-frames/statCircleDashboardRows';
import { statCoalitionDashboardRows } from '@/Stat/dashboard-frames/statCoalitionDashboardRows';
import { statRecordDashboardRows } from '@/Stat/dashboard-frames/statRecordDashboardRows';
import { statStatusDashboardRows } from '@/Stat/dashboard-frames/statStatusDashboardRows';

export const StatPageSkeleton = () => {
  return (
    <VStack w="100%" align="start" spacing="4rem">
      <VStack w="100%" align="start" spacing="6rem">
        <VStack w="100%" align="start" spacing="2rem">
          <H2BoldText>✨ 현재 여행 현황</H2BoldText>
          <DashboardSkeleton defaultRows={statStatusDashboardRows} />
        </VStack>
        <VStack w="100%" align="start" spacing="2rem">
          <H2BoldText>🚀 이너서클 · 멤버 관련 통계</H2BoldText>
          <DashboardSkeleton defaultRows={statCircleDashboardRows} />
        </VStack>
        <VStack w="100%" align="start" spacing="2rem">
          <H2BoldText>🏅 역대 기록</H2BoldText>
          <DashboardSkeleton defaultRows={statRecordDashboardRows} />
        </VStack>
        <VStack w="100%" align="start" spacing="2rem">
          <H2BoldText>🥊 코알리숑 비교</H2BoldText>
          <DashboardSkeleton defaultRows={statCoalitionDashboardRows} />
        </VStack>
      </VStack>
    </VStack>
  );
};
