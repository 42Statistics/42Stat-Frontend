import type { TabletDashboardProps } from '@/types/Dashboard';
import { TabletDashboardLayout } from '@components/templates/Dashboard/Tablet';
import { TabletDashboardRow } from '@components/templates/Dashboard/Tablet/TabletDashboardRow';
import { DashboardItem } from '@components/templates/Dashboard/shared/DashboardItem';
import { DashboardItemSkeleton } from '../shared/DashboardItemSkeleton';

type TabletDashboardSkeletonProps = Omit<TabletDashboardProps, 'contents'>;

export const TabletDashboardSkeleton = ({
  rows,
}: TabletDashboardSkeletonProps) => {
  return (
    <TabletDashboardLayout>
      {rows.map(({ row, col, items }, rowIdx) => (
        <TabletDashboardRow key={rowIdx} row={row} col={col}>
          {items.map(({ row, col, rowSpan, colSpan }, itemIdx) => (
            <DashboardItem
              key={itemIdx}
              row={row}
              col={col}
              rowSpan={rowSpan}
              colSpan={colSpan}
              content={DashboardItemSkeleton}
            />
          ))}
        </TabletDashboardRow>
      ))}
    </TabletDashboardLayout>
  );
};
