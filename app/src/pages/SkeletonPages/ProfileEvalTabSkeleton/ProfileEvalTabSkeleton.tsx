import { DashboardSkeleton } from '@/components/templates/DashboardSkeleton';
import { useProfileEvalTabDashboardSkeleton } from './hooks';

export const ProfileEvalTabSkeleton = () => {
  return <DashboardSkeleton {...useProfileEvalTabDashboardSkeleton()} />;
};
