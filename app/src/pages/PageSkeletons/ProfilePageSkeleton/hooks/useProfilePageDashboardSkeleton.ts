import {
  profilePageDesktopDashboardRows,
  profilePageMobileDashboardRows,
  profilePageTabletDashboardRows,
} from '@/pages/ProfilePage/hooks/profilePageDashboardRows';

export const useprofilePageDashboardSkeleton = () => ({
  desktopRows: profilePageDesktopDashboardRows,
  tabletRows: profilePageTabletDashboardRows,
  mobileRows: profilePageMobileDashboardRows,
});
