import { profileVersusPageDashboardRows } from '@/Profile/dashboard-frames/profileVersusPageDashboardRows';
import { DashboardSkeleton } from '@shared/components/DashboardSkeleton';

export const ProfileVersusPageSkeleton = () => {
  return <DashboardSkeleton rows={profileVersusPageDashboardRows} />;
};
