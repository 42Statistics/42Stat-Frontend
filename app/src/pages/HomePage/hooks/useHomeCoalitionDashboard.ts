import { homePageDashboardContents } from './homePageDashboardContents';
import {
  homeCoalitionDesktopDashboardRows,
  homeCoalitionMobileDashboardRows,
  homeCoalitionTabletDashboardRows,
} from './homeCoalitionDashboardRows';

export const useHomeCoalitionDashboard = () => ({
  contents: homePageDashboardContents,
  desktopRows: homeCoalitionDesktopDashboardRows,
  tabletRows: homeCoalitionTabletDashboardRows,
  mobileRows: homeCoalitionMobileDashboardRows,
});
