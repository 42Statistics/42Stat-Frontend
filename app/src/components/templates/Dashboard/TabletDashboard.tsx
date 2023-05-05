import { DashboardItem } from '@/components/templates/DashboardItem';
import { DashboardItemWrapper } from '@/components/templates/DashboardItemWrapper';
import { TabletDashboardRow } from '@/components/templates/DashboardRow';
import { TabletDashboardRowContainer } from '@/components/templates/DashboardRowContainer';
import type { TabletDashboardProps } from '@/utils/types/Dashboard';

export const TabletDashboard = ({ rows, contents }: TabletDashboardProps) => {
  return (
    <TabletDashboardRowContainer>
      {rows.map(({ row, col, items }, rowIdx) => (
        <TabletDashboardRow key={rowIdx} row={row} col={col}>
          {items.map(({ row, col, rowSpan, colSpan, elementId }, itemIdx) => (
            <DashboardItemWrapper
              key={itemIdx}
              row={row}
              col={col}
              rowSpan={rowSpan}
              colSpan={colSpan}
              element={
                <DashboardItem
                  title={contents[elementId].title}
                  description={contents[elementId].description}
                  content={contents[elementId].content}
                />
              }
            />
          ))}
        </TabletDashboardRow>
      ))}
    </TabletDashboardRowContainer>
  );
};
