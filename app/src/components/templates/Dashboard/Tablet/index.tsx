import type { TabletDashboardProps } from '@/types/Dashboard';
import styled from '@emotion/styled';
import { DashboardItem } from '../shared/DashboardItem';
import { TabletDashboardRow } from './TabletDashboardRow';

export const TabletDashboard = ({ rows, contents }: TabletDashboardProps) => {
  return (
    <TabletDashboardLayout>
      {rows.map(({ row, col, items }, rowIdx) => (
        <TabletDashboardRow key={rowIdx} row={row} col={col}>
          {items.map(({ row, col, rowSpan, colSpan, elementId }, itemIdx) => (
            <DashboardItem
              key={itemIdx}
              row={row}
              col={col}
              rowSpan={rowSpan}
              colSpan={colSpan}
              content={contents[elementId].content}
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
  gap: 2.4rem;
  width: 100%;
`;
