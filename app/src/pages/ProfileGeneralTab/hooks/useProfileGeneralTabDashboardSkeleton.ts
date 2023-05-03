import {
  profileGeneralTabDesktopDashboardRows,
  profileGeneralTabMobileDashboardRows,
  profileGeneralTabTabletDashboardRows,
} from './profileGeneralTabDashboardRows';

export const useProfileGeneralTabDashboardSkeleton = () => ({
  desktopRows: profileGeneralTabDesktopDashboardRows,
  tabletRows: profileGeneralTabTabletDashboardRows,
  mobileRows: profileGeneralTabMobileDashboardRows,
});
