import {
  homeCoalitionDesktopDashboardRows,
  homeCoalitionMobileDashboardRows,
  homeCoalitionTabletDashboardRows,
} from '../dashboard-frames/homeCoalitionDashboardRows';
import { homePageDashboardContents } from '../dashboard-frames/homePageDashboardContents';

export const useHomeCoalitionDashboard = () => ({
  contents: homePageDashboardContents,
  desktopRows: homeCoalitionDesktopDashboardRows,
  tabletRows: homeCoalitionTabletDashboardRows,
  mobileRows: homeCoalitionMobileDashboardRows,
});
