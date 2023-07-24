import {
  homeStatusDesktopDashboardRows,
  homeStatusMobileDashboardRows,
  homeStatusTabletDashboardRows,
} from '../dashboard-frames/homeStatusDashboardRows';

export const useHomeStatusDashboardSkeleton = () => ({
  desktopRows: homeStatusDesktopDashboardRows,
  tabletRows: homeStatusTabletDashboardRows,
  mobileRows: homeStatusMobileDashboardRows,
});
