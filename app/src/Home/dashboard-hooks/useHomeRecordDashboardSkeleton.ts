import {
  homeRecordDesktopDashboardRows,
  homeRecordMobileDashboardRows,
  homeRecordTabletDashboardRows,
} from '../dashboard-frames/homeRecordDashboardRows';

export const useHomeRecordDashboardSkeleton = () => ({
  desktopRows: homeRecordDesktopDashboardRows,
  tabletRows: homeRecordTabletDashboardRows,
  mobileRows: homeRecordMobileDashboardRows,
});
