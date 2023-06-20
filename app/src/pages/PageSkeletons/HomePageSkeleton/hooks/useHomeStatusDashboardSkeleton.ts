import {
  homeStatusDesktopDashboardRows,
  homeStatusMobileDashboardRows,
  homeStatusTabletDashboardRows,
} from '@pages/HomePage/hooks/homeStatusDashboardRows';

export const useHomeStatusDashboardSkeleton = () => ({
  desktopRows: homeStatusDesktopDashboardRows,
  tabletRows: homeStatusTabletDashboardRows,
  mobileRows: homeStatusMobileDashboardRows,
});
