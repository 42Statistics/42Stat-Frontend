import {
  homeHeroDesktopDashboardRows,
  homeHeroMobileDashboardRows,
  homeHeroTabletDashboardRows,
} from '../dashboard-frames/homeHeroDashboardRows';

export const useHomeHeroDashboardSkeleton = () => ({
  desktopRows: homeHeroDesktopDashboardRows,
  tabletRows: homeHeroTabletDashboardRows,
  mobileRows: homeHeroMobileDashboardRows,
});
