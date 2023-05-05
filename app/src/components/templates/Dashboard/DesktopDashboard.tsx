import { DashboardItem } from '@/components/templates/DashboardItem';
import { DashboardItemWrapper } from '@/components/templates/DashboardItemWrapper';
import { DesktopDashboardRow } from '@/components/templates/DashboardRow';
import { DesktopDashboardRowContainer } from '@/components/templates/DashboardRowContainer';
import type { DesktopDashboardProps } from '@/utils/types/Dashboard';

export const DesktopDashboard = ({ rows, contents }: DesktopDashboardProps) => {
  return (
    <DesktopDashboardRowContainer>
      {rows.map(({ row, col, items }, rowIdx) => (
        <DesktopDashboardRow key={rowIdx} row={row} col={col}>
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
        </DesktopDashboardRow>
      ))}
    </DesktopDashboardRowContainer>
  );
};
