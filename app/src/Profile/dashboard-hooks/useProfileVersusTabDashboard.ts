import { profileVersusTabDashboardContents } from '../dashboard-contents/profileVersusTabDashboardContents';
import {
  profileVersusTabDesktopDashboardRows,
  profileVersusTabMobileDashboardRows,
  profileVersusTabTabletDashboardRows,
} from '../dashboard-frames/profileVersusTabDashboardRows';

export const useProfileVersusTabDashboard = () => ({
  contents: profileVersusTabDashboardContents,
  desktopRows: profileVersusTabDesktopDashboardRows,
  tabletRows: profileVersusTabTabletDashboardRows,
  mobileRows: profileVersusTabMobileDashboardRows,
});
