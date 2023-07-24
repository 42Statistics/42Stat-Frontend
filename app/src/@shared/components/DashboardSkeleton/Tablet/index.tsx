import { TabletDashboardLayout } from '@shared/components/Dashboard/Tablet';
import { TabletDashboardRow } from '@shared/components/Dashboard/Tablet/TabletDashboardRow';
import { DashboardItem } from '@shared/components/Dashboard/shared/DashboardItem';
import type { TabletDashboardProps } from '@shared/types/Dashboard';
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
