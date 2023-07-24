import { profileEvalTabDashboardContents } from '../dashboard-frames/profileEvalTabDashboardContents';
import {
  profileEvalTabDesktopDashboardRows,
  profileEvalTabMobileDashboardRows,
  profileEvalTabTabletDashboardRows,
} from '../dashboard-frames/profileEvalTabDashboardRows';

export const useProfileEvalTabDashboard = () => ({
  contents: profileEvalTabDashboardContents,
  desktopRows: profileEvalTabDesktopDashboardRows,
  tabletRows: profileEvalTabTabletDashboardRows,
  mobileRows: profileEvalTabMobileDashboardRows,
});
