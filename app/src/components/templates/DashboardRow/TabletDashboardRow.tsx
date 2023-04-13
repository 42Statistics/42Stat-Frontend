import {
  TabletDashboardColSize,
  TabletDashboardRowSize,
} from '@/utils/types/Dashboard';
import styled from '@emotion/styled';

type TabletDashboardRowProps = {
  row: TabletDashboardRowSize;
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
  row: TabletDashboardRowSize;
  col: TabletDashboardColSize;
};

const TabletDashboardRowLayout = styled.div<TabletDashboardRowLayoutProps>`
  display: grid;
  grid-template-columns: ${({ col }) => `repeat(${col}, 1fr)`};
  grid-template-rows: ${({ row, col }) =>
    `repeat(${row}, ${col === 3 ? '16rem' : '21rem'})`};
  column-gap: 2rem;
  row-gap: 2rem;
  width: 100%;
`;
