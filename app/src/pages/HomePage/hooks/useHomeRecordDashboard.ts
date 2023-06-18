import { homePageDashboardContents } from './homePageDashboardContents';
import {
  homeRecordDesktopDashboardRows,
  homeRecordMobileDashboardRows,
  homeRecordTabletDashboardRows,
} from './homeRecordDashboardRows';

export const useHomeRecordDashboard = () => ({
  contents: homePageDashboardContents,
  desktopRows: homeRecordDesktopDashboardRows,
  tabletRows: homeRecordTabletDashboardRows,
  mobileRows: homeRecordMobileDashboardRows,
});
