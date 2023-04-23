import { Desktop, Mobile, Tablet } from '@/utils/responsive/Device';
import {
  DashboardItemProps,
  DesktopDashboardRowType,
  MobileDashboardRowType,
  TabletDashboardRowType,
} from '@/utils/types/Dashboard';
import { DesktopDashboard } from './DesktopDashboard';
import { MobileDashboard } from './MobileDashboard';
import { TabletDashboard } from './TabletDashboard';

type DashboardProps = {
  desktopRows: DesktopDashboardRowType[];
  tabletRows: TabletDashboardRowType[];
  mobileRows: MobileDashboardRowType[];
  contents: DashboardItemProps[];
};

export const Dashboard = ({
  desktopRows,
  tabletRows,
  mobileRows,
  contents,
}: DashboardProps) => {
  return (
    <>
      <Desktop>
        <DesktopDashboard rows={desktopRows} contents={contents} />
      </Desktop>
      <Tablet>
        <TabletDashboard rows={tabletRows} contents={contents} />
      </Tablet>
      <Mobile>
        <MobileDashboard rows={mobileRows} contents={contents} />
      </Mobile>
    </>
  );
};
