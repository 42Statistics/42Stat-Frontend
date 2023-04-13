import {
  DesktopDashboard,
  MobileDashboard,
} from '@/components/templates/Dashboard';
import { TabletDashboard } from '@/components/templates/Dashboard/TabletDashboard';
import { Desktop, Mobile, Tablet } from '@/utils/responsive/Device';
import { Helmet } from 'react-helmet-async';
import { dashboardContents } from './hooks/dashboardContents';
import { useTotalPage } from './hooks/useTotalPage';

export const TotalPage = () => {
  const { desktopDashboardRows, tabletDashboardRows, mobileDashboardRows } =
    useTotalPage();
  return (
    <>
      <Helmet>
        <title>전체 정보 보기 | 42Stat</title>
      </Helmet>
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
