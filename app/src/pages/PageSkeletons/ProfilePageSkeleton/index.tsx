import { VStack } from '@components/common';
import { DashboardSkeleton } from '@components/templates/DashboardSkeleton';
import {
  useProfileGeneralTabDashboardSkeleton,
  useProfilePageDashboardSkeleton,
} from './hooks';

export const ProfilePageSkeleton = () => {
  return (
    <VStack w="100%" spacing="9rem">
      <DashboardSkeleton {...useProfilePageDashboardSkeleton()} />
      <DashboardSkeleton {...useProfileGeneralTabDashboardSkeleton()} />
    </VStack>
  );
};
