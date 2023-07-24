import {
  homeHeroDesktopDashboardRows,
  homeHeroMobileDashboardRows,
  homeHeroTabletDashboardRows,
} from '../dashboard-frames/homeHeroDashboardRows';
import { homePageDashboardContents } from '../dashboard-frames/homePageDashboardContents';

export const useHomeHeroDashboard = () => ({
  contents: homePageDashboardContents,
  desktopRows: homeHeroDesktopDashboardRows,
  tabletRows: homeHeroTabletDashboardRows,
  mobileRows: homeHeroMobileDashboardRows,
});
