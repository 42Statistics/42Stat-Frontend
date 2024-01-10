import { DashboardSkeleton } from '@shared/components/DashboardSkeleton';

import { profileGeneralPageDashboardRowsDesktop } from '@/Profile/dashboard-frames/profileGeneralPageDashboardRows';

export const ProfileGeneralPageSkeleton = () => {
  return <DashboardSkeleton rows={profileGeneralPageDashboardRowsDesktop} />;
};
