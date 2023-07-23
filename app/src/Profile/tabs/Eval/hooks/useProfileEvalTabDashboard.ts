import { profileEvalTabDashboardContents } from './profileEvalTabDashboardContents';
import {
  profileEvalTabDesktopDashboardRows,
  profileEvalTabMobileDashboardRows,
  profileEvalTabTabletDashboardRows,
} from './profileEvalTabDashboardRows';

export const useProfileEvalTabDashboard = () => ({
  contents: profileEvalTabDashboardContents,
  desktopRows: profileEvalTabDesktopDashboardRows,
  tabletRows: profileEvalTabTabletDashboardRows,
  mobileRows: profileEvalTabMobileDashboardRows,
});
