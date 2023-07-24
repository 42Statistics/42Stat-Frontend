import { homePageDashboardContents } from '../dashboard-contents/homePageDashboardContents';
import {
  homeCircleDesktopDashboardRows,
  homeCircleMobileDashboardRows,
  homeCircleTabletDashboardRows,
} from '../dashboard-frames/homeCircleDashboardRows';

export const useHomeCircleDashboard = () => ({
  contents: homePageDashboardContents,
  desktopRows: homeCircleDesktopDashboardRows,
  tabletRows: homeCircleTabletDashboardRows,
  mobileRows: homeCircleMobileDashboardRows,
});
