import type { DesktopDashboardColSize } from '@/types/Dashboard';
import styled from '@emotion/styled';

type DesktopDashboardRowProps = {
  row: number;
  col: DesktopDashboardColSize;
  children: React.ReactNode;
};

export const DesktopDashboardRow = ({
  children,
  ...propsExceptChildren
}: DesktopDashboardRowProps) => {
  return <Layout {...propsExceptChildren}>{children}</Layout>;
};

type LayoutProps = {
  row: number;
  col: DesktopDashboardColSize;
};

const Layout = styled.div<LayoutProps>`
  display: grid;
  grid-template-columns: ${({ col }) => `repeat(${col}, 1fr)`};
  grid-template-rows: ${({ row, col }) =>
    `repeat(${row}, ${getHeightByCol(col)})`};
  column-gap: 2.4rem;
  row-gap: 2.4rem;
  width: 100%;
`;

const getHeightByCol = (col: DesktopDashboardColSize) => {
  switch (col) {
    case 4:
      return '14rem';
    case 3:
      return '18rem';
    default:
      throw new Error('Invalid col size');
  }
};
