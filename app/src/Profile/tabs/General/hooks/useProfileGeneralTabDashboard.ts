import { profileGeneralTabDashboardContents } from './profileGeneralTabDashboardContents';
import {
  profileGeneralTabDesktopDashboardRows,
  profileGeneralTabMobileDashboardRows,
  profileGeneralTabTabletDashboardRows,
} from './profileGeneralTabDashboardRows';

export const useProfileGeneralTabDashboard = () => ({
  contents: profileGeneralTabDashboardContents,
  desktopRows: profileGeneralTabDesktopDashboardRows,
  tabletRows: profileGeneralTabTabletDashboardRows,
  mobileRows: profileGeneralTabMobileDashboardRows,
});
