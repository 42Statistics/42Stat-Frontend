import type { DashboardProps } from '@shared/types/Dashboard';
import { Center } from '@shared/ui-kit';
import { Desktop, Mobile, Tablet } from '@shared/utils/react-responsive/Device';
import { DesktopDashboard } from './Desktop';
import { MobileDashboard } from './Mobile';
import { TabletDashboard } from './Tablet';

export const Dashboard = ({
  desktopRows,
  tabletRows,
  mobileRows,
  contents,
}: DashboardProps) => {
  return (
    <Center>
      <Desktop>
        <DesktopDashboard rows={desktopRows} contents={contents} />
      </Desktop>
      <Tablet>
        <TabletDashboard rows={tabletRows} contents={contents} />
      </Tablet>
      <Mobile>
        <MobileDashboard rows={mobileRows} contents={contents} />
      </Mobile>
    </Center>
  );
};
