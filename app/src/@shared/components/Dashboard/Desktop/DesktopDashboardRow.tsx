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
  column-gap: 1rem;
  row-gap: 1rem;
  width: 100%;
`;

const getHeightByCol = (col: DesktopDashboardColSize) => {
  switch (col) {
    case 4:
      return '14rem';
    case 3:
    default:
      return '20rem';
  }
};
