import { profileGeneralPageDashboardRows } from '@/Profile/dashboard-frames/profileGeneralPageDashboardRows';
import { DashboardTempSkeleton } from '@shared/components/DashboardSkeleton/DashboardTempSkeleton';

export const ProfileGeneralPageSkeleton = () => {
  return <DashboardTempSkeleton rows={profileGeneralPageDashboardRows} />;
};
