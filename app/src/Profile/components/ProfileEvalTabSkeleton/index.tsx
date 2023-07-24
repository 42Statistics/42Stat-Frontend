import { DashboardSkeleton } from '@shared/components/DashboardSkeleton';
import { useProfileEvalTabDashboardSkeleton } from '@/Profile/dashboard-hooks/useProfileEvalTabDashboardSkeleton';

export const ProfileEvalTabSkeleton = () => {
  return <DashboardSkeleton {...useProfileEvalTabDashboardSkeleton()} />;
};
