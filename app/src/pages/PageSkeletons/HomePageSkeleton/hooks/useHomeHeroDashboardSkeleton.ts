import {
  homeHeroDesktopDashboardRows,
  homeHeroMobileDashboardRows,
  homeHeroTabletDashboardRows,
} from '@/Home/hooks/homeHeroDashboardRows';

export const useHomeHeroDashboardSkeleton = () => ({
  desktopRows: homeHeroDesktopDashboardRows,
  tabletRows: homeHeroTabletDashboardRows,
  mobileRows: homeHeroMobileDashboardRows,
});
