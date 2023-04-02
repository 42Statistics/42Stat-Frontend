import {
  DesktopDashboard,
  MobileDashboard,
} from '@/components/templates/Dashboard';
import { AboveTablet, Mobile } from '@/utils/responsive/Device';
import { dashboardContents } from './hooks/dashboardContents';
import { useProfileGeneralPage } from './hooks/useProfileGeneralPage';

export const ProfileGeneralPage = () => {
  const { desktopDashboardRows, mobileDashboardRows } = useProfileGeneralPage();

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
