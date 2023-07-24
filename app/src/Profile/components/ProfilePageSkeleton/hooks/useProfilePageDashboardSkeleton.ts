import {
  profilePageDesktopDashboardRows,
  profilePageMobileDashboardRows,
  profilePageTabletDashboardRows,
} from '@/Profile/hooks/profilePageDashboardRows';

export const useProfilePageDashboardSkeleton = () => ({
  desktopRows: profilePageDesktopDashboardRows,
  tabletRows: profilePageTabletDashboardRows,
  mobileRows: profilePageMobileDashboardRows,
});
