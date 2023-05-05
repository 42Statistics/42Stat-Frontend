import { DashboardItemWrapper } from '@/components/templates/DashboardItemWrapper';
import { DesktopDashboardRow } from '@/components/templates/DashboardRow';
import { DesktopDashboardRowContainer } from '@/components/templates/DashboardRowContainer';
import type { DesktopDashboardProps } from '@/utils/types/Dashboard';
import { DashboardSkeletonItem } from '../DashboardSkeletonItem';

type DesktopDashboardSkeletonProps = Omit<DesktopDashboardProps, 'contents'>;

export const DesktopDashboardSkeleton = ({
  rows,
}: DesktopDashboardSkeletonProps) => {
  return (
    <DesktopDashboardRowContainer>
      {rows.map(({ row, col, items }, rowIdx) => (
        <DesktopDashboardRow key={rowIdx} row={row} col={col}>
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
        </DesktopDashboardRow>
      ))}
    </DesktopDashboardRowContainer>
  );
};
