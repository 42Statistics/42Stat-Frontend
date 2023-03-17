import { center } from '@/styles/components';
import styled from '@emotion/styled';
import { ReactNode } from 'react';

type DashboardItemSize = '1/8' | '1/4' | '1/3' | '2/3' | '3/3';

type DashboardItemProps = {
  size: DashboardItemSize;
  col: number;
  row?: number;
  children: ReactNode;
};

export const DashboardItem = ({
  size,
  col,
  row = 1,
  children,
}: DashboardItemProps) => {
  return (
    <DashboardItemLayout
      col={col}
      colSpan={size === '3/3' ? 3 : size === '2/3' ? 2 : 1}
      row={row}
      rowSpan={size === '1/8' ? 1 : 2}
    >
      {children}
    </DashboardItemLayout>
  );
};

type DashboardItemLayoutProps = {
  col: number;
  colSpan: number;
  row: number;
  rowSpan: number;
};

const DashboardItemLayout = styled.div<DashboardItemLayoutProps>`
  ${center}
  height: 100%;
  background-color: ${({ theme }) => theme.colors.mono.white};
  grid-column: ${({ col, colSpan }) => `${col} / span ${colSpan}`};
  grid-row: ${({ row, rowSpan }) => `${row} / span ${rowSpan}`};
  border-radius: 20px;

  transition: box-shadow 200ms ease-in-out, transform 200ms ease-in-out;
  :hover {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;
