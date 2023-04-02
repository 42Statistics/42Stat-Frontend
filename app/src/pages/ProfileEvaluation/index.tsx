import {
  DesktopDashboard,
  MobileDashboard,
} from '@/components/templates/Dashboard';
import { AboveTablet, Mobile } from '@/utils/responsive/Device';
import { dashboardContents } from './hooks/dashboardContents';
import { useProfileEvaluationPage } from './hooks/useProfileEvaluationPage';

export const ProfileEvaluationPage = () => {
  const { desktopDashboardRows, mobileDashboardRows } =
    useProfileEvaluationPage();

  return (
    <>
      <AboveTablet>
        <DesktopDashboard
          rows={desktopDashboardRows}
          contents={dashboardContents}
        />
      </AboveTablet>
      <Mobile>
        <MobileDashboard
          rows={mobileDashboardRows}
          contents={dashboardContents}
        />
      </Mobile>
    </>
  );
};
