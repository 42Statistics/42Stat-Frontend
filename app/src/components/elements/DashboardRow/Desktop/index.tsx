import styled from '@emotion/styled';
import { ReactNode } from 'react';

type DesktopDashboardRowSize = 1 | 2;
type DesktopDashboardColSize = 3 | 4;

type DesktopDashboardRowProps = {
  row: DesktopDashboardRowSize;
  col: DesktopDashboardColSize;
  children: ReactNode;
};

export const DesktopDashboardRow = ({
  children,
  ...propsExceptChildren
}: DesktopDashboardRowProps) => {
  return (
    <DesktopDashboardRowLayout {...propsExceptChildren}>
      {children}
    </DesktopDashboardRowLayout>
  );
};

type DesktopDashboardRowLayoutProps = {
  row: DesktopDashboardRowSize;
  col: DesktopDashboardColSize;
};

const DesktopDashboardRowLayout = styled.div<DesktopDashboardRowLayoutProps>`
  display: grid;
  width: 100%;
  grid-template-columns: ${({ col }) => `repeat(${col}, 1fr)`};
  grid-template-rows: ${({ row, col }) =>
    `repeat(${row}, ${col === 4 ? '13.5rem' : '18rem'})`};
  column-gap: 2rem;
  row-gap: 2rem;
`;
