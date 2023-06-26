import styled from '@emotion/styled';
import type { TabletDashboardColSize } from '@utils/types/Dashboard';

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
  column-gap: 2.4rem;
  row-gap: 2.4rem;
  width: 100%;
`;

const getHeightByCol = (col: TabletDashboardColSize) => {
  switch (col) {
    case 3:
      return '14rem';
    case 2:
      return '18rem';
    default:
      throw new Error('Invalid col size');
  }
};
