import { Center } from '@components/common';
import { Desktop, Mobile, Tablet } from '@utils/responsive/Device';
import type { DashboardProps } from '@/types/Dashboard';
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
    <Center w="100%">
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
