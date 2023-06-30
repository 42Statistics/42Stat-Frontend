import styled from '@emotion/styled';
import type { MobileDashboardProps } from '@/types/Dashboard';
import { DashboardItem } from '../shared/DashboardItem';
import { MobileDashboardRow } from './MobileDashboardRow';

export const MobileDashboard = ({ rows, contents }: MobileDashboardProps) => {
  return (
    <MobileDashboardLayout>
      {rows.map(({ row, col, items }, rowIdx) => (
        <MobileDashboardRow key={rowIdx} row={row} col={col}>
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
        </MobileDashboardRow>
      ))}
    </MobileDashboardLayout>
  );
};

export const MobileDashboardLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
`;
