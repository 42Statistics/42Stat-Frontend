import {
  statPageDesktopDashboardRows,
  statPageMobileDashboardRows,
  statPageTabletDashboardRows,
} from './statPageDashboardRows';

export const useStatPageDashboardSkeleton = () => ({
  desktopRows: statPageDesktopDashboardRows,
  tabletRows: statPageTabletDashboardRows,
  mobileRows: statPageMobileDashboardRows,
});
