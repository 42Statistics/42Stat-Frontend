import { homePageDashboardContents } from '../dashboard-contents/homePageDashboardContents';
import {
  homeHeroDesktopDashboardRows,
  homeHeroMobileDashboardRows,
  homeHeroTabletDashboardRows,
} from '../dashboard-frames/homeHeroDashboardRows';

export const useHomeHeroDashboard = () => ({
  contents: homePageDashboardContents,
  desktopRows: homeHeroDesktopDashboardRows,
  tabletRows: homeHeroTabletDashboardRows,
  mobileRows: homeHeroMobileDashboardRows,
});
