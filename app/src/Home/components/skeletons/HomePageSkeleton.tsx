import { DashboardSkeleton } from '@shared/components/DashboardSkeleton';
import { H2BoldText, VStack } from '@shared/ui-kit';

import { HeroSkeleton } from '@/Home/components/skeletons/HeroSkeleton';
import { homeCircleDashboardRows } from '@/Home/dashboard-frames/homeCircleDashboardRows';
import { homeCoalitionDashboardRows } from '@/Home/dashboard-frames/homeCoalitionDashboardRows';
import { homeRecordDashboardRows } from '@/Home/dashboard-frames/homeRecordDashboardRows';
import { homeStatusDashboardRows } from '@/Home/dashboard-frames/homeStatusDashboardRows';

export const HomePageSkeleton = () => {
  return (
    <VStack w="100%" align="start" spacing="4rem">
      <HeroSkeleton />
      <VStack w="100%" align="start" spacing="6rem">
        <VStack w="100%" align="start" spacing="2rem">
          <H2BoldText>✨ 현재 여행 현황</H2BoldText>
          <DashboardSkeleton defaultRows={homeStatusDashboardRows} />
        </VStack>
        <VStack w="100%" align="start" spacing="2rem">
          <H2BoldText>🚀 이너서클 · 멤버 관련 통계</H2BoldText>
          <DashboardSkeleton defaultRows={homeCircleDashboardRows} />
        </VStack>
        <VStack w="100%" align="start" spacing="2rem">
          <H2BoldText>🏅 역대 기록</H2BoldText>
          <DashboardSkeleton defaultRows={homeRecordDashboardRows} />
        </VStack>
        <VStack w="100%" align="start" spacing="2rem">
          <H2BoldText>🥊 코알리숑 비교</H2BoldText>
          <DashboardSkeleton defaultRows={homeCoalitionDashboardRows} />
        </VStack>
      </VStack>
    </VStack>
  );
};
