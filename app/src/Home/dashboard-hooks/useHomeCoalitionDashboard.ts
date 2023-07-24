import { homePageDashboardContents } from '../dashboard-contents/homePageDashboardContents';
import {
  homeCoalitionDesktopDashboardRows,
  homeCoalitionMobileDashboardRows,
  homeCoalitionTabletDashboardRows,
} from '../dashboard-frames/homeCoalitionDashboardRows';

export const useHomeCoalitionDashboard = () => ({
  contents: homePageDashboardContents,
  desktopRows: homeCoalitionDesktopDashboardRows,
  tabletRows: homeCoalitionTabletDashboardRows,
  mobileRows: homeCoalitionMobileDashboardRows,
});
