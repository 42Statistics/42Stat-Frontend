import { projectDetailPageDashboardContents } from './projectDetailPageDashboardContents';
import {
  projectDetailPageDesktopDashboardRows,
  projectDetailPageMobileDashboardRows,
  projectDetailPageTabletDashboardRows,
} from './projectDetailPageDashboardRows';

export const useProjectDetailPageDashboard = () => ({
  contents: projectDetailPageDashboardContents,
  desktopRows: projectDetailPageDesktopDashboardRows,
  tabletRows: projectDetailPageTabletDashboardRows,
  mobileRows: projectDetailPageMobileDashboardRows,
});
