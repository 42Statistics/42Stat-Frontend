import {
  profileEvalTabDesktopDashboardRows,
  profileEvalTabMobileDashboardRows,
  profileEvalTabTabletDashboardRows,
} from '@/pages/ProfileEvalTab/hooks/profileEvalTabDashboardRows';

export const useProfileEvalTabDashboardSkeleton = () => ({
  desktopRows: profileEvalTabDesktopDashboardRows,
  tabletRows: profileEvalTabTabletDashboardRows,
  mobileRows: profileEvalTabMobileDashboardRows,
});
