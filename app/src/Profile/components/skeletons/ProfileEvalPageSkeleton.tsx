import { profileEvalPageDashboardRows } from '@/Profile/dashboard-frames/profileEvalPageDashboardRows';
import { DashboardSkeleton } from '@shared/components/DashboardSkeleton';

export const ProfileEvalPageSkeleton = () => {
  return <DashboardSkeleton rows={profileEvalPageDashboardRows} />;
};
