import {
  statPageDesktopDashboardRows,
  statPageMobileDashboardRows,
  statPageTabletDashboardRows,
} from '@/pages/StatPage/hooks/statPageDashboardRows';

export const useStatPageDashboardSkeleton = () => ({
  desktopRows: statPageDesktopDashboardRows,
  tabletRows: statPageTabletDashboardRows,
  mobileRows: statPageMobileDashboardRows,
});
