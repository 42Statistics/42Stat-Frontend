import { DashboardSkeleton } from '@shared/components/DashboardSkeleton';
import { useProfileEvalTabDashboardSkeleton } from './hooks/useProfileEvalTabDashboardSkeleton';

export const ProfileEvalTabSkeleton = () => {
  return <DashboardSkeleton {...useProfileEvalTabDashboardSkeleton()} />;
};
