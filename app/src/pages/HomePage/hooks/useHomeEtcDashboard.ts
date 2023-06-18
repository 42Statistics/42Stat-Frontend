import { homePageDashboardContents } from './homePageDashboardContents';
import {
  homeEtcDesktopDashboardRows,
  homeEtcMobileDashboardRows,
  homeEtcTabletDashboardRows,
} from './homeEtcDashboardRows';

export const useHomeEtcDashboard = () => ({
  contents: homePageDashboardContents,
  desktopRows: homeEtcDesktopDashboardRows,
  tabletRows: homeEtcTabletDashboardRows,
  mobileRows: homeEtcMobileDashboardRows,
});
