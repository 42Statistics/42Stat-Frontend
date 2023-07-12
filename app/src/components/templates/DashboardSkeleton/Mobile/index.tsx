import type { MobileDashboardProps } from '@/types/Dashboard';
import { MobileDashboardLayout } from '@components/templates/Dashboard/Mobile';
import { MobileDashboardRow } from '@components/templates/Dashboard/Mobile/MobileDashboardRow';
import { DashboardItem } from '@components/templates/Dashboard/shared/DashboardItem';
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
