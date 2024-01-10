import { DashboardSkeleton } from '@shared/components/DashboardSkeleton';

import {
  profileGeneralPageDashboardRows,
  profileGeneralPageDashboardRowsMobile,
} from '@/Profile/dashboard-frames/profileGeneralPageDashboardRows';

export const ProfileGeneralPageSkeleton = () => {
  return (
    <DashboardSkeleton
      defaultRows={profileGeneralPageDashboardRows}
      mobileRows={profileGeneralPageDashboardRowsMobile}
    />
  );
};
