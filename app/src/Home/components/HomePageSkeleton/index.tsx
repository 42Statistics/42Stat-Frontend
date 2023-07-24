import { useHomeCircleDashboardSkeleton } from '@/Home/dashboard-hooks/useHomeCircleDashboardSkeleton';
import { useHomeCoalitionDashboardSkeleton } from '@/Home/dashboard-hooks/useHomeCoalitionDashboardSkeleton';
import { useHomeHeroDashboardSkeleton } from '@/Home/dashboard-hooks/useHomeHeroDashboardSkeleton';
import { useHomeRecordDashboardSkeleton } from '@/Home/dashboard-hooks/useHomeRecordDashboardSkeleton';
import { useHomeStatusDashboardSkeleton } from '@/Home/dashboard-hooks/useHomeStatusDashboardSkeleton';
import { DashboardSkeleton } from '@shared/components/DashboardSkeleton';
import { H2BoldText, VStack } from '@shared/ui-kit';

export const HomePageSkeleton = () => {
  return (
    <VStack w="100%" align="start" spacing="6rem">
      <DashboardSkeleton {...useHomeHeroDashboardSkeleton()} />
      <VStack w="100%" align="start" spacing="2rem">
        <H2BoldText>👋 실시간 여행 현황</H2BoldText>
        <DashboardSkeleton {...useHomeStatusDashboardSkeleton()} />
      </VStack>
      <VStack w="100%" align="start" spacing="2rem">
        <H2BoldText>🚀 이너서클 · 멤버 관련 통계</H2BoldText>
        <DashboardSkeleton {...useHomeCircleDashboardSkeleton()} />
      </VStack>
      <VStack w="100%" align="start" spacing="2rem">
        <H2BoldText>🏅 역대 기록</H2BoldText>
        <DashboardSkeleton {...useHomeRecordDashboardSkeleton()} />
      </VStack>
      <VStack w="100%" align="start" spacing="2rem">
        <H2BoldText>🥊 코알리숑 비교</H2BoldText>
        <DashboardSkeleton {...useHomeCoalitionDashboardSkeleton()} />
      </VStack>
    </VStack>
  );
};
