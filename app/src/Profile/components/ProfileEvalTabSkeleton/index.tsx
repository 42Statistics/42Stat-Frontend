import { profileEvalTabDashboardRows } from '@/Profile/dashboard-frames/profileEvalTabDashboardRows';
import { DashboardSkeleton } from '@shared/components/DashboardSkeleton';

export const ProfileEvalTabSkeleton = () => {
  return <DashboardSkeleton rows={profileEvalTabDashboardRows} />;
};
