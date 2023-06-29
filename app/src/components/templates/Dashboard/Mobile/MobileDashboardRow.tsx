import styled from '@emotion/styled';
import type { MobileDashboardColSize } from '@/types/Dashboard';

type MobileDashboardRowProps = {
  row: number;
  col: MobileDashboardColSize;
  children: React.ReactNode;
};

export const MobileDashboardRow = ({
  children,
  ...propsExceptChildren
}: MobileDashboardRowProps) => {
  return (
    <MobileDashboardRowLayout {...propsExceptChildren}>
      {children}
    </MobileDashboardRowLayout>
  );
};

type MobileDashboardRowLayoutProps = {
  row: number;
  col: MobileDashboardColSize;
};

const MobileDashboardRowLayout = styled.div<MobileDashboardRowLayoutProps>`
  display: grid;
  grid-template-columns: ${({ col }) => `repeat(${col}, 1fr)`};
  grid-template-rows: ${({ row, col }) =>
    `repeat(${row}, ${getHeightByCol(col)})`};
  column-gap: 2rem;
  row-gap: 2rem;
  width: 100%;
`;

const getHeightByCol = (col: MobileDashboardColSize) => {
  switch (col) {
    case 1:
      return '15rem';
    default:
      throw new Error('Invalid col size');
  }
};
