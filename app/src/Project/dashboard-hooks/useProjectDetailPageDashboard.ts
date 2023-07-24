import { projectDetailPageDashboardContents } from '../dashboard-frames/projectDetailPageDashboardContents';
import {
  projectDetailPageDesktopDashboardRows,
  projectDetailPageMobileDashboardRows,
  projectDetailPageTabletDashboardRows,
} from '../dashboard-frames/projectDetailPageDashboardRows';

export const useProjectDetailPageDashboard = () => ({
  contents: projectDetailPageDashboardContents,
  desktopRows: projectDetailPageDesktopDashboardRows,
  tabletRows: projectDetailPageTabletDashboardRows,
  mobileRows: projectDetailPageMobileDashboardRows,
});
