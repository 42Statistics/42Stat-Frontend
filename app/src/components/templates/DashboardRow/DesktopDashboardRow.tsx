import { DesktopDashboardColSize } from '@/utils/types/Dashboard';
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
  return (
    <DesktopDashboardRowLayout {...propsExceptChildren}>
      {children}
    </DesktopDashboardRowLayout>
  );
};

type DesktopDashboardRowLayoutProps = {
  row: number;
  col: DesktopDashboardColSize;
};

const DesktopDashboardRowLayout = styled.div<DesktopDashboardRowLayoutProps>`
  display: grid;
  grid-template-columns: ${({ col }) => `repeat(${col}, 1fr)`};
  grid-template-rows: ${({ row, col }) =>
    `repeat(${row}, ${getHeightByCol(col)})`};
  column-gap: 2rem;
  row-gap: 2rem;
  width: 100%;
`;

const getHeightByCol = (col: DesktopDashboardColSize) => {
  switch (col) {
    case 4:
      return '16rem';
    case 3:
      return '21rem';
    default:
      throw new Error('Invalid col size');
  }
};
