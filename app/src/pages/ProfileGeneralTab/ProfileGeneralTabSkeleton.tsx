import { DashboardSkeleton } from '@/components/templates/DashboardSkeleton';
import { useProfileGeneralTabDashboardSkeleton } from './hooks';

export const ProfileGeneralTabSkeleton = () => {
  return <DashboardSkeleton {...useProfileGeneralTabDashboardSkeleton()} />;
};
