import {
  DesktopDashboard,
  MobileDashboard,
} from '@/components/templates/Dashboard';
import { TabletDashboard } from '@/components/templates/Dashboard/TabletDashboard';
import { Desktop, Mobile, Tablet } from '@/utils/responsive/Device';
import { dashboardContents } from './hooks/dashboardContents';
import { useProfileGeneralPage } from './hooks/useProfileGeneralPage';

export const ProfileGeneralPage = () => {
  const { desktopDashboardRows, tabletDashboardRows, mobileDashboardRows } =
    useProfileGeneralPage();

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
