import { profileVersusTabDashboardContents } from './profileVersusTabDashboardContents';
import {
  profileVersusTabDesktopDashboardRows,
  profileVersusTabMobileDashboardRows,
  profileVersusTabTabletDashboardRows,
} from './profileVersusTabDashboardRows';

export const useProfileVersusTabDashboard = () => ({
  contents: profileVersusTabDashboardContents,
  desktopRows: profileVersusTabDesktopDashboardRows,
  tabletRows: profileVersusTabTabletDashboardRows,
  mobileRows: profileVersusTabMobileDashboardRows,
});
