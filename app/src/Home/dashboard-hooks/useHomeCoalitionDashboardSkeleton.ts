import {
  homeCoalitionDesktopDashboardRows,
  homeCoalitionMobileDashboardRows,
  homeCoalitionTabletDashboardRows,
} from '../dashboard-frames/homeCoalitionDashboardRows';

export const useHomeCoalitionDashboardSkeleton = () => ({
  desktopRows: homeCoalitionDesktopDashboardRows,
  tabletRows: homeCoalitionTabletDashboardRows,
  mobileRows: homeCoalitionMobileDashboardRows,
});
