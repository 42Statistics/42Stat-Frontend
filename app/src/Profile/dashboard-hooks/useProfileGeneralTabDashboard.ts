import { profileGeneralTabDashboardContents } from '../dashboard-frames/profileGeneralTabDashboardContents';
import {
  profileGeneralTabDesktopDashboardRows,
  profileGeneralTabMobileDashboardRows,
  profileGeneralTabTabletDashboardRows,
} from '../dashboard-frames/profileGeneralTabDashboardRows';

export const useProfileGeneralTabDashboard = () => ({
  contents: profileGeneralTabDashboardContents,
  desktopRows: profileGeneralTabDesktopDashboardRows,
  tabletRows: profileGeneralTabTabletDashboardRows,
  mobileRows: profileGeneralTabMobileDashboardRows,
});
