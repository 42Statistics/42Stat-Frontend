import { homePageDashboardContents } from '../dashboard-contents/homePageDashboardContents';
import {
  homeStatusDesktopDashboardRows,
  homeStatusMobileDashboardRows,
  homeStatusTabletDashboardRows,
} from '../dashboard-frames/homeStatusDashboardRows';

export const useHomeStatusDashboard = () => ({
  contents: homePageDashboardContents,
  desktopRows: homeStatusDesktopDashboardRows,
  tabletRows: homeStatusTabletDashboardRows,
  mobileRows: homeStatusMobileDashboardRows,
});
