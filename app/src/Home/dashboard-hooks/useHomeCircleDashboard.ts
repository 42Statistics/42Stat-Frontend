import {
  homeCircleDesktopDashboardRows,
  homeCircleMobileDashboardRows,
  homeCircleTabletDashboardRows,
} from '../dashboard-frames/homeCircleDashboardRows';
import { homePageDashboardContents } from '../dashboard-frames/homePageDashboardContents';

export const useHomeCircleDashboard = () => ({
  contents: homePageDashboardContents,
  desktopRows: homeCircleDesktopDashboardRows,
  tabletRows: homeCircleTabletDashboardRows,
  mobileRows: homeCircleMobileDashboardRows,
});
