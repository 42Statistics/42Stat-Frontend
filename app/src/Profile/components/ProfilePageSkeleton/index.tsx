import { useProfileGeneralTabDashboardSkeleton } from '@/Profile/dashboard-hooks/useProfileGeneralTabDashboardSkeleton';
import { DashboardSkeleton } from '@shared/components/DashboardSkeleton';
import { VStack } from '@shared/ui-kit';
import { UserProfileSkeleton } from './UserProfileSkeleton';

export const ProfilePageSkeleton = () => {
  return (
    <VStack w="100%" spacing="9rem">
      <UserProfileSkeleton />
      <DashboardSkeleton {...useProfileGeneralTabDashboardSkeleton()} />
    </VStack>
  );
};
