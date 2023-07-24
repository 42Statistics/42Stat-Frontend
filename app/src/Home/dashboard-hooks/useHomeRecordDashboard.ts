import { homePageDashboardContents } from '../dashboard-contents/homePageDashboardContents';
import {
  homeRecordDesktopDashboardRows,
  homeRecordMobileDashboardRows,
  homeRecordTabletDashboardRows,
} from '../dashboard-frames/homeRecordDashboardRows';

export const useHomeRecordDashboard = () => ({
  contents: homePageDashboardContents,
  desktopRows: homeRecordDesktopDashboardRows,
  tabletRows: homeRecordTabletDashboardRows,
  mobileRows: homeRecordMobileDashboardRows,
});
