import { DashboardItem } from '@components/templates/Dashboard/DashboardItem';
import { MobileDashboardLayout } from '@components/templates/Dashboard/MobileDashboard';
import { MobileDashboardRow } from '@components/templates/Dashboard/MobileDashboardRow';
import type { MobileDashboardProps } from '@utils/types/Dashboard';
import { DashboardSkeletonItem } from './DashboardSkeletonItem';

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
              content={DashboardSkeletonItem}
            />
          ))}
        </MobileDashboardRow>
      ))}
    </MobileDashboardLayout>
  );
};
