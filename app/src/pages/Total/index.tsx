import {
  DesktopDashboard,
  MobileDashboard,
} from '@/components/templates/Dashboard';
import { AboveTablet, Mobile } from '@/utils/responsive/Device';
import { Helmet } from 'react-helmet-async';
import { dashboardContents } from './hooks/dashboardContents';
import { useTotalPage } from './hooks/useTotalPage';

export const TotalPage = () => {
  const { desktopDashboardRows, mobileDashboardRows } = useTotalPage();
  return (
    <>
      <Helmet>
        <title>전체 정보 보기 | 42Stat</title>
      </Helmet>
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
