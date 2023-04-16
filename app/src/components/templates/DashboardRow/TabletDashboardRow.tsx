import { TabletDashboardColSize } from '@/utils/types/Dashboard';
import styled from '@emotion/styled';

type TabletDashboardRowProps = {
  row: number;
  col: TabletDashboardColSize;
  children: React.ReactNode;
};

export const TabletDashboardRow = ({
  children,
  ...propsExceptChildren
}: TabletDashboardRowProps) => {
  return (
    <TabletDashboardRowLayout {...propsExceptChildren}>
      {children}
    </TabletDashboardRowLayout>
  );
};

type TabletDashboardRowLayoutProps = {
  row: number;
  col: TabletDashboardColSize;
};

const TabletDashboardRowLayout = styled.div<TabletDashboardRowLayoutProps>`
  display: grid;
  grid-template-columns: ${({ col }) => `repeat(${col}, 1fr)`};
  grid-template-rows: ${({ row, col }) =>
    `repeat(${row}, ${getHeightByCol(col)})`};
  column-gap: 2rem;
  row-gap: 2rem;
  width: 100%;
`;

const getHeightByCol = (col: TabletDashboardColSize) => {
  switch (col) {
    case 3:
      return '16rem';
    case 2:
      return '21rem';
    default:
      throw new Error('Invalid col size');
  }
};
