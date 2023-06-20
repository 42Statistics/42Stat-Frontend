import {
  homeEtcDesktopDashboardRows,
  homeEtcMobileDashboardRows,
  homeEtcTabletDashboardRows,
} from '@pages/HomePage/hooks/homeEtcDashboardRows';

export const useHomeEtcDashboardSkeleton = () => ({
  desktopRows: homeEtcDesktopDashboardRows,
  tabletRows: homeEtcTabletDashboardRows,
  mobileRows: homeEtcMobileDashboardRows,
});
