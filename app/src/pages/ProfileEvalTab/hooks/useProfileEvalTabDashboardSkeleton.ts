import {
  profileEvalTabDesktopDashboardRows,
  profileEvalTabMobileDashboardRows,
  profileEvalTabTabletDashboardRows,
} from './profileEvalTabDashboardRows';

export const useProfileEvalTabDashboardSkeleton = () => ({
  desktopRows: profileEvalTabDesktopDashboardRows,
  tabletRows: profileEvalTabTabletDashboardRows,
  mobileRows: profileEvalTabMobileDashboardRows,
});
