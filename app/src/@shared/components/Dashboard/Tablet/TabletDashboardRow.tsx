import styled from '@emotion/styled';
import type { TabletDashboardColSize } from '@shared/types/Dashboard';
import { PropsWithReactElementChildren } from '@shared/types/PropsWithChildren';

type TabletDashboardRowProps = PropsWithReactElementChildren<{
  row: number;
  col: TabletDashboardColSize;
}>;

export const TabletDashboardRow = styled.div<TabletDashboardRowProps>`
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
