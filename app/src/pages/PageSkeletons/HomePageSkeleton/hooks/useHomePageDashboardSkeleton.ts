import {
  homePageDesktopDashboardRows,
  homePageMobileDashboardRows,
  homePageTabletDashboardRows,
} from '@/pages/HomePage/hooks/homePageDashboardRows';

export const useHomePageDashboardSkeleton = () => ({
  desktopRows: homePageDesktopDashboardRows,
  tabletRows: homePageTabletDashboardRows,
  mobileRows: homePageMobileDashboardRows,
});
