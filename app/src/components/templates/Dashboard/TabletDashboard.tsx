import type { TabletDashboardProps } from '@/utils/types/Dashboard';
import styled from '@emotion/styled';
import { DashboardItem } from './DashboardItem';
import { DashboardItemWrapper } from './DashboardItemWrapper';
import { TabletDashboardRow } from './TabletDashboardRow';

export const TabletDashboard = ({ rows, contents }: TabletDashboardProps) => {
  return (
    <TabletDashboardLayout>
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
    </TabletDashboardLayout>
  );
};

export const TabletDashboardLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
`;
