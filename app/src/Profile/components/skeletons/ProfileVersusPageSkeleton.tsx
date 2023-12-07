import { DashboardSkeleton } from '@shared/components/DashboardSkeleton';

import { profileVersusPageDashboardRows } from '@/Profile/dashboard-frames/profileVersusPageDashboardRows';

export const ProfileVersusPageSkeleton = () => {
  return <DashboardSkeleton rows={profileVersusPageDashboardRows} />;
};
