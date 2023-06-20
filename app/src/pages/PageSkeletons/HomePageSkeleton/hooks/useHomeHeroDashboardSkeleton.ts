import {
  homeHeroDesktopDashboardRows,
  homeHeroMobileDashboardRows,
  homeHeroTabletDashboardRows,
} from '@pages/HomePage/hooks/homeHeroDashboardRows';

export const useHomeHeroDashboardSkeleton = () => ({
  desktopRows: homeHeroDesktopDashboardRows,
  tabletRows: homeHeroTabletDashboardRows,
  mobileRows: homeHeroMobileDashboardRows,
});
