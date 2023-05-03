import { DashboardItemWrapper } from '@/components/templates/DashboardItemWrapper';
import { MobileDashboardRow } from '@/components/templates/DashboardRow';
import { MobileDashboardRowContainer } from '@/components/templates/DashboardRowContainer';
import { MobileDashboardProps } from '@/utils/types/Dashboard';
import { DashboardSkeletonItem } from '../DashboardSkeletonItem';

type MobileDashboardSkeletonProps = Omit<MobileDashboardProps, 'contents'>;

export const MobileDashboardSkeleton = ({
  rows,
}: MobileDashboardSkeletonProps) => {
  return (
    <MobileDashboardRowContainer>
      {rows.map(({ row, col, items }, rowIdx) => (
        <MobileDashboardRow key={rowIdx} row={row} col={col}>
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
        </MobileDashboardRow>
      ))}
    </MobileDashboardRowContainer>
  );
};
