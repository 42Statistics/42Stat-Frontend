import { homePageDashboardContents } from './homePageDashboardContents';
import {
  homeStatusDesktopDashboardRows,
  homeStatusMobileDashboardRows,
  homeStatusTabletDashboardRows,
} from './homeStatusDashboardRows';

export const useHomeStatusDashboard = () => ({
  contents: homePageDashboardContents,
  desktopRows: homeStatusDesktopDashboardRows,
  tabletRows: homeStatusTabletDashboardRows,
  mobileRows: homeStatusMobileDashboardRows,
});
