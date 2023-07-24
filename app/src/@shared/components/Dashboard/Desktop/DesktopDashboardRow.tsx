import styled from '@emotion/styled';
import type { DesktopDashboardColSize } from '@shared/types/Dashboard';
import { PropsWithReactElementChildren } from '@shared/types/PropsWithChildren';

type DesktopDashboardRowProps = PropsWithReactElementChildren<{
  row: number;
  col: DesktopDashboardColSize;
}>;

export const DesktopDashboardRow = styled.div<DesktopDashboardRowProps>`
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
