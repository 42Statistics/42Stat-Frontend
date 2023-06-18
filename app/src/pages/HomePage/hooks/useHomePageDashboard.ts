import { homePageDashboardContents } from './homePageDashboardContents';
import {
  homePageDesktopDashboardRows,
  homePageMobileDashboardRows,
  homePageTabletDashboardRows,
} from './homePageDashboardRows';

export const useHomePageDashboard = () => ({
  contents: homePageDashboardContents,
  desktopRows: homePageDesktopDashboardRows,
  tabletRows: homePageTabletDashboardRows,
  mobileRows: homePageMobileDashboardRows,
});
