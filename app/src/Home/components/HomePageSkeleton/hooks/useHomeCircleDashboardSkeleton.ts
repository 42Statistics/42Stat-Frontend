import {
  homeCircleDesktopDashboardRows,
  homeCircleMobileDashboardRows,
  homeCircleTabletDashboardRows,
} from '@/Home/hooks/homeCircleDashboardRows';

export const useHomeCircleDashboardSkeleton = () => ({
  desktopRows: homeCircleDesktopDashboardRows,
  tabletRows: homeCircleTabletDashboardRows,
  mobileRows: homeCircleMobileDashboardRows,
});
