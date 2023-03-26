import {
  DesktopDashboardColSize,
  DesktopDashboardRowSize,
} from '@/utils/types/Dashboard';
import styled from '@emotion/styled';
import { ReactNode } from 'react';

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
    `repeat(${row}, ${col === 4 ? '16rem' : '21rem'})`};
  column-gap: 2rem;
  row-gap: 2rem;
`;
