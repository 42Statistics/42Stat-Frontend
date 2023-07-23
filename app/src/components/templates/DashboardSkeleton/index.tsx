import { Center } from '@components/common';
import type { DashboardProps } from '@shared/types/Dashboard';
import { Desktop, Mobile, Tablet } from '@shared/utils/responsive/Device';
import { DesktopDashboardSkeleton } from './Desktop';
import { MobileDashboardSkeleton } from './Mobile';
import { TabletDashboardSkeleton } from './Tablet';

type DashboardSkeletonProps = Omit<DashboardProps, 'contents'>;

export const DashboardSkeleton = ({
  desktopRows,
  tabletRows,
  mobileRows,
}: DashboardSkeletonProps) => {
  return (
    <Center>
      <Desktop>
        <DesktopDashboardSkeleton rows={desktopRows} />
      </Desktop>
      <Tablet>
        <TabletDashboardSkeleton rows={tabletRows} />
      </Tablet>
      <Mobile>
        <MobileDashboardSkeleton rows={mobileRows} />
      </Mobile>
    </Center>
  );
};
