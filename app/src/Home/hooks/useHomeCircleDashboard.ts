import { homePageDashboardContents } from './homePageDashboardContents';
import {
  homeCircleDesktopDashboardRows,
  homeCircleMobileDashboardRows,
  homeCircleTabletDashboardRows,
} from './homeCircleDashboardRows';

export const useHomeCircleDashboard = () => ({
  contents: homePageDashboardContents,
  desktopRows: homeCircleDesktopDashboardRows,
  tabletRows: homeCircleTabletDashboardRows,
  mobileRows: homeCircleMobileDashboardRows,
});
