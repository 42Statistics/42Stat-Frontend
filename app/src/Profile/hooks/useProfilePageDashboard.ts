import { profilePageDashboardContents } from './profilePageDashboardContents';
import {
  profilePageDesktopDashboardRows,
  profilePageMobileDashboardRows,
  profilePageTabletDashboardRows,
} from './profilePageDashboardRows';

export const useProfilePageDashboard = () => ({
  contents: profilePageDashboardContents,
  desktopRows: profilePageDesktopDashboardRows,
  tabletRows: profilePageTabletDashboardRows,
  mobileRows: profilePageMobileDashboardRows,
});
