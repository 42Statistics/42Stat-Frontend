import { DashboardSkeleton } from '@components/templates/DashboardSkeleton';
import { useProfileEvalTabDashboardSkeleton } from './hooks/useProfileEvalTabDashboardSkeleton';

export const ProfileEvalTabSkeleton = () => {
  return <DashboardSkeleton {...useProfileEvalTabDashboardSkeleton()} />;
};
