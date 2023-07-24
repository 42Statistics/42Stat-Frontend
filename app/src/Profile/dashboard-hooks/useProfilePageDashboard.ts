import { profilePageDashboardContents } from '../dashboard-contents/profilePageDashboardContents';
import {
  profilePageDesktopDashboardRows,
  profilePageMobileDashboardRows,
  profilePageTabletDashboardRows,
} from '../dashboard-frames/profilePageDashboardRows';

export const useProfilePageDashboard = () => ({
  contents: profilePageDashboardContents,
  desktopRows: profilePageDesktopDashboardRows,
  tabletRows: profilePageTabletDashboardRows,
  mobileRows: profilePageMobileDashboardRows,
});
