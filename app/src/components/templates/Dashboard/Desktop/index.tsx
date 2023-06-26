import styled from '@emotion/styled';
import type { DesktopDashboardProps } from '@utils/types/Dashboard';
import { DashboardItem } from '../shared/DashboardItem';
import { DesktopDashboardRow } from './DesktopDashboardRow';

export const DesktopDashboard = ({ rows, contents }: DesktopDashboardProps) => {
  return (
    <DesktopDashboardLayout>
      {rows.map(({ row, col, items }, rowIdx) => (
        <DesktopDashboardRow key={rowIdx} row={row} col={col}>
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
        </DesktopDashboardRow>
      ))}
    </DesktopDashboardLayout>
  );
};

export const DesktopDashboardLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
`;