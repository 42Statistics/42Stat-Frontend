import { MobileDashboardColSize } from '@/utils/types/Dashboard';
import styled from '@emotion/styled';

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
  column-gap: 1.5rem;
  row-gap: 1.5rem;
  width: 100%;
`;

const getHeightByCol = (col: MobileDashboardColSize) => {
  switch (col) {
    case 2:
      return '10rem';
    case 1:
      return '40rem';
    default:
      throw new Error('Invalid col size');
  }
};
