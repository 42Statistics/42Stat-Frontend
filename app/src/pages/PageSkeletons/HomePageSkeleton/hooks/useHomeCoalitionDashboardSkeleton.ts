import {
  homeCoalitionDesktopDashboardRows,
  homeCoalitionMobileDashboardRows,
  homeCoalitionTabletDashboardRows,
} from '@pages/HomePage/hooks/homeCoalitionDashboardRows';

export const useHomeCoalitionDashboardSkeleton = () => ({
  desktopRows: homeCoalitionDesktopDashboardRows,
  tabletRows: homeCoalitionTabletDashboardRows,
  mobileRows: homeCoalitionMobileDashboardRows,
});
