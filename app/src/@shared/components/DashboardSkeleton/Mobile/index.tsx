import { MobileDashboardLayout } from '@shared/components/Dashboard/Mobile';
import { MobileDashboardRow } from '@shared/components/Dashboard/Mobile/MobileDashboardRow';
import { DashboardItem } from '@shared/components/Dashboard/shared/DashboardItem';
import type { MobileDashboardProps } from '@shared/types/Dashboard';
import { DashboardItemSkeleton } from '../shared/DashboardItemSkeleton';

type MobileDashboardSkeletonProps = Omit<MobileDashboardProps, 'contents'>;

export const MobileDashboardSkeleton = ({
  rows,
}: MobileDashboardSkeletonProps) => {
  return (
    <MobileDashboardLayout>
      {rows.map(({ row, col, items }, rowIdx) => (
        <MobileDashboardRow key={rowIdx} row={row} col={col}>
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
        </MobileDashboardRow>
      ))}
    </MobileDashboardLayout>
  );
};
