import {
  profilePageDesktopDashboardRows,
  profilePageMobileDashboardRows,
  profilePageTabletDashboardRows,
} from './profilePageDashboardRows';

export const useprofilePageDashboardSkeleton = () => ({
  desktopRows: profilePageDesktopDashboardRows,
  tabletRows: profilePageTabletDashboardRows,
  mobileRows: profilePageMobileDashboardRows,
});
