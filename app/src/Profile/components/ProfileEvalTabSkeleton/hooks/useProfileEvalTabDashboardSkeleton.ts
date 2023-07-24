import {
  profileEvalTabDesktopDashboardRows,
  profileEvalTabMobileDashboardRows,
  profileEvalTabTabletDashboardRows,
} from '@/Profile/tabs/Eval/hooks/profileEvalTabDashboardRows';

export const useProfileEvalTabDashboardSkeleton = () => ({
  desktopRows: profileEvalTabDesktopDashboardRows,
  tabletRows: profileEvalTabTabletDashboardRows,
  mobileRows: profileEvalTabMobileDashboardRows,
});
