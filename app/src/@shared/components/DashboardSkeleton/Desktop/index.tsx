import { DesktopDashboardLayout } from '@shared/components/Dashboard/Desktop';
import { DesktopDashboardRow } from '@shared/components/Dashboard/Desktop/DesktopDashboardRow';
import type { DesktopDashboardProps } from '@shared/types/Dashboard';
import { DashboardItemSkeleton } from '../shared/DashboardItemSkeleton';

type DesktopDashboardSkeletonProps = Omit<DesktopDashboardProps, 'contents'>;

export const DesktopDashboardSkeleton = ({
  rows,
}: DesktopDashboardSkeletonProps) => {
  return (
    <DesktopDashboardLayout>
      {rows.map(({ row, col, items }, rowIdx) => (
        <DesktopDashboardRow key={rowIdx} row={row} col={col}>
          {items.map(({ row, col, rowSpan, colSpan }, itemIdx) => (
            <DashboardItemSkeleton
              key={itemIdx}
              row={row}
              col={col}
              rowSpan={rowSpan}
              colSpan={colSpan}
            />
          ))}
        </DesktopDashboardRow>
      ))}
    </DesktopDashboardLayout>
  );
};
