import {
  homeStatusDesktopDashboardRows,
  homeStatusMobileDashboardRows,
  homeStatusTabletDashboardRows,
} from '@/Home/hooks/homeStatusDashboardRows';

export const useHomeStatusDashboardSkeleton = () => ({
  desktopRows: homeStatusDesktopDashboardRows,
  tabletRows: homeStatusTabletDashboardRows,
  mobileRows: homeStatusMobileDashboardRows,
});
