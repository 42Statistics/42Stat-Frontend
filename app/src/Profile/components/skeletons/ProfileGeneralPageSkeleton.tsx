import { DashboardTempSkeleton } from '@shared/components/DashboardSkeleton/DashboardTempSkeleton';

import { profileGeneralPageDashboardRows } from '@/Profile/dashboard-frames/profileGeneralPageDashboardRows';

export const ProfileGeneralPageSkeleton = () => {
  return <DashboardTempSkeleton rows={profileGeneralPageDashboardRows} />;
};
