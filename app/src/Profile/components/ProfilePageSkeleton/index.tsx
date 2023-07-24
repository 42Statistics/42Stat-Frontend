import { useProfileGeneralTabDashboardSkeleton } from '@/Profile/dashboard-hooks/useProfileGeneralTabDashboardSkeleton';
import { useProfilePageDashboardSkeleton } from '@/Profile/dashboard-hooks/useProfilePageDashboardSkeleton';
import { DashboardSkeleton } from '@shared/components/DashboardSkeleton';
import { VStack } from '@shared/ui-kit';

export const ProfilePageSkeleton = () => {
  return (
    <VStack w="100%" spacing="9rem">
      <DashboardSkeleton {...useProfilePageDashboardSkeleton()} />
      <DashboardSkeleton {...useProfileGeneralTabDashboardSkeleton()} />
    </VStack>
  );
};
