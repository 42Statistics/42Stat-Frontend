import {
  homeHeroDesktopDashboardRows,
  homeHeroMobileDashboardRows,
  homeHeroTabletDashboardRows,
} from './homeHeroDashboardRows';
import { homePageDashboardContents } from './homePageDashboardContents';

export const useHomeHeroDashboard = () => ({
  contents: homePageDashboardContents,
  desktopRows: homeHeroDesktopDashboardRows,
  tabletRows: homeHeroTabletDashboardRows,
  mobileRows: homeHeroMobileDashboardRows,
});
