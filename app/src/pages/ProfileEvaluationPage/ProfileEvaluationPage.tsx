import {
  DesktopDashboard,
  MobileDashboard,
} from '@/components/templates/Dashboard';
import { TabletDashboard } from '@/components/templates/Dashboard/TabletDashboard';
import { Desktop, Mobile, Tablet } from '@/utils/responsive/Device';
import { dashboardContents } from './hooks/dashboardContents';
import { useProfileEvaluationPage } from './hooks/useProfileEvaluationPage';

export const ProfileEvaluationPage = () => {
  const { desktopDashboardRows, tabletDashboardRows, mobileDashboardRows } =
    useProfileEvaluationPage();

  return (
    <>
      <Desktop>
        <DesktopDashboard
          rows={desktopDashboardRows}
          contents={dashboardContents}
        />
      </Desktop>
      <Tablet>
        <TabletDashboard
          rows={tabletDashboardRows}
          contents={dashboardContents}
        />
      </Tablet>
      <Mobile>
        <MobileDashboard
          rows={mobileDashboardRows}
          contents={dashboardContents}
        />
      </Mobile>
    </>
  );
};
