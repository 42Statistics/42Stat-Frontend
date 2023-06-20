import {
  homeCircleDesktopDashboardRows,
  homeCircleMobileDashboardRows,
  homeCircleTabletDashboardRows,
} from '@pages/HomePage/hooks/homeCircleDashboardRows';

export const useHomeCircleDashboardSkeleton = () => ({
  desktopRows: homeCircleDesktopDashboardRows,
  tabletRows: homeCircleTabletDashboardRows,
  mobileRows: homeCircleMobileDashboardRows,
});
