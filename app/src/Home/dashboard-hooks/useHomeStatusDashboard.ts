import { homePageDashboardContents } from '../dashboard-frames/homePageDashboardContents';
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
