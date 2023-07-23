import {
  homeCoalitionDesktopDashboardRows,
  homeCoalitionMobileDashboardRows,
  homeCoalitionTabletDashboardRows,
} from '@/Home/hooks/homeCoalitionDashboardRows';

export const useHomeCoalitionDashboardSkeleton = () => ({
  desktopRows: homeCoalitionDesktopDashboardRows,
  tabletRows: homeCoalitionTabletDashboardRows,
  mobileRows: homeCoalitionMobileDashboardRows,
});
