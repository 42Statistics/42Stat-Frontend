import {
  profileGeneralTabDesktopDashboardRows,
  profileGeneralTabMobileDashboardRows,
  profileGeneralTabTabletDashboardRows,
} from '@/Profile/tabs/General/hooks/profileGeneralTabDashboardRows';

export const useProfileGeneralTabDashboardSkeleton = () => ({
  desktopRows: profileGeneralTabDesktopDashboardRows,
  tabletRows: profileGeneralTabTabletDashboardRows,
  mobileRows: profileGeneralTabMobileDashboardRows,
});
