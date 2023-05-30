import { DashboardItemWrapper } from '@components/templates/Dashboard/DashboardItemWrapper';
import { TabletDashboardLayout } from '@components/templates/Dashboard/TabletDashboard';
import { TabletDashboardRow } from '@components/templates/Dashboard/TabletDashboardRow';
import type { TabletDashboardProps } from '@utils/types/Dashboard';
import { DashboardSkeletonItem } from './DashboardSkeletonItem';

type TabletDashboardSkeletonProps = Omit<TabletDashboardProps, 'contents'>;

export const TabletDashboardSkeleton = ({
  rows,
}: TabletDashboardSkeletonProps) => {
  return (
    <TabletDashboardLayout>
      {rows.map(({ row, col, items }, rowIdx) => (
        <TabletDashboardRow key={rowIdx} row={row} col={col}>
          {items.map(({ row, col, rowSpan, colSpan }, itemIdx) => (
            <DashboardItemWrapper
              key={itemIdx}
              row={row}
              col={col}
              rowSpan={rowSpan}
              colSpan={colSpan}
              element={<DashboardSkeletonItem />}
            />
          ))}
        </TabletDashboardRow>
      ))}
    </TabletDashboardLayout>
  );
};
