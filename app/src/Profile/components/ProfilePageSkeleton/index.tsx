import { DashboardSkeleton } from '@shared/components/DashboardSkeleton';
import { VStack } from '@shared/ui-kit';
import { useProfileGeneralTabDashboardSkeleton } from './hooks/useProfileGeneralTabDashboardSkeleton';
import { useProfilePageDashboardSkeleton } from './hooks/useProfilePageDashboardSkeleton';

export const ProfilePageSkeleton = () => {
  return (
    <VStack w="100%" spacing="9rem">
      <DashboardSkeleton {...useProfilePageDashboardSkeleton()} />
      <DashboardSkeleton {...useProfileGeneralTabDashboardSkeleton()} />
    </VStack>
  );
};
