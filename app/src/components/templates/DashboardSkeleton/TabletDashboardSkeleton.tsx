import { DashboardItemWrapper } from '@/components/templates/DashboardItemWrapper';
import { TabletDashboardRow } from '@/components/templates/DashboardRow';
import { TabletDashboardRowContainer } from '@/components/templates/DashboardRowContainer';
import { TabletDashboardProps } from '@/utils/types/Dashboard';
import { DashboardSkeletonItem } from '../DashboardSkeletonItem';

type TabletDashboardSkeletonProps = Omit<TabletDashboardProps, 'contents'>;

export const TabletDashboardSkeleton = ({
  rows,
}: TabletDashboardSkeletonProps) => {
  return (
    <TabletDashboardRowContainer>
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
    </TabletDashboardRowContainer>
  );
};
