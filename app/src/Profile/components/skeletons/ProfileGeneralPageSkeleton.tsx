import { profileGeneralPageDashboardRows } from '@/Profile/dashboard-frames/profileGeneralPageDashboardRows';
import { DashboardSkeleton } from '@shared/components/DashboardSkeleton';

export const ProfileGeneralPageSkeleton = () => {
  return <DashboardSkeleton rows={profileGeneralPageDashboardRows} />;
};
