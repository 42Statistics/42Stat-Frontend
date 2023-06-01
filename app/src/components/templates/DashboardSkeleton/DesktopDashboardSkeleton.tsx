import { DashboardItem } from '@components/templates/Dashboard/DashboardItem';
import { DesktopDashboardLayout } from '@components/templates/Dashboard/DesktopDashboard';
import { DesktopDashboardRow } from '@components/templates/Dashboard/DesktopDashboardRow';
import type { DesktopDashboardProps } from '@utils/types/Dashboard';
import { DashboardSkeletonItem } from './DashboardSkeletonItem';

type DesktopDashboardSkeletonProps = Omit<DesktopDashboardProps, 'contents'>;

export const DesktopDashboardSkeleton = ({
  rows,
}: DesktopDashboardSkeletonProps) => {
  return (
    <DesktopDashboardLayout>
      {rows.map(({ row, col, items }, rowIdx) => (
        <DesktopDashboardRow key={rowIdx} row={row} col={col}>
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
        </DesktopDashboardRow>
      ))}
    </DesktopDashboardLayout>
  );
};
