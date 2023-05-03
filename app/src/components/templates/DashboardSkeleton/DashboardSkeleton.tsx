import { Desktop, Mobile, Tablet } from '@/utils/responsive/Device';
import { DashboardProps } from '@/utils/types/Dashboard';
import { DesktopDashboardSkeleton } from './DesktopDashboardSkeleton';
import { MobileDashboardSkeleton } from './MobileDashboardSkeleton';
import { TabletDashboardSkeleton } from './TabletDashboardSkeleton';

type DashboardSkeletonProps = Omit<DashboardProps, 'contents'>;

export const DashboardSkeleton = ({
  desktopRows,
  tabletRows,
  mobileRows,
}: DashboardSkeletonProps) => {
  return (
    <>
      <Desktop>
        <DesktopDashboardSkeleton rows={desktopRows} />
      </Desktop>
      <Tablet>
        <TabletDashboardSkeleton rows={tabletRows} />
      </Tablet>
      <Mobile>
        <MobileDashboardSkeleton rows={mobileRows} />
      </Mobile>
    </>
  );
};
