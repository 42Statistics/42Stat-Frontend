import { profileGeneralTabDashboardContents } from '../dashboard-contents/profileGeneralTabDashboardContents';
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
