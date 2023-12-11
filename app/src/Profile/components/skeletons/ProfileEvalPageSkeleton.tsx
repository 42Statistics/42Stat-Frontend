import { DashboardSkeleton } from '@shared/components/DashboardSkeleton';

import { profileEvalPageDashboardRows } from '@/Profile/dashboard-frames/profileEvalPageDashboardRows';

export const ProfileEvalPageSkeleton = () => {
  return <DashboardSkeleton rows={profileEvalPageDashboardRows} />;
};
