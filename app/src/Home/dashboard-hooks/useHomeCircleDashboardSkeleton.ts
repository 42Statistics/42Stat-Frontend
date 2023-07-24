import {
  homeCircleDesktopDashboardRows,
  homeCircleMobileDashboardRows,
  homeCircleTabletDashboardRows,
} from '../dashboard-frames/homeCircleDashboardRows';

export const useHomeCircleDashboardSkeleton = () => ({
  desktopRows: homeCircleDesktopDashboardRows,
  tabletRows: homeCircleTabletDashboardRows,
  mobileRows: homeCircleMobileDashboardRows,
});
