import {
  homeRecordDesktopDashboardRows,
  homeRecordMobileDashboardRows,
  homeRecordTabletDashboardRows,
} from '@/Home/hooks/homeRecordDashboardRows';

export const useHomeRecordDashboardSkeleton = () => ({
  desktopRows: homeRecordDesktopDashboardRows,
  tabletRows: homeRecordTabletDashboardRows,
  mobileRows: homeRecordMobileDashboardRows,
});
