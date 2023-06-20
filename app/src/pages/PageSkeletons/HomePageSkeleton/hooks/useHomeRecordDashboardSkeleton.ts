import {
  homeRecordDesktopDashboardRows,
  homeRecordMobileDashboardRows,
  homeRecordTabletDashboardRows,
} from '@pages/HomePage/hooks/homeRecordDashboardRows';

export const useHomeRecordDashboardSkeleton = () => ({
  desktopRows: homeRecordDesktopDashboardRows,
  tabletRows: homeRecordTabletDashboardRows,
  mobileRows: homeRecordMobileDashboardRows,
});
