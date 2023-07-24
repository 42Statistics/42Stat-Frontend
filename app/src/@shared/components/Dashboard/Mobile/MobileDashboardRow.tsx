import styled from '@emotion/styled';
import type { MobileDashboardColSize } from '@shared/types/Dashboard';
import { PropsWithReactElementChildren } from '@shared/types/PropsWithChildren';

type MobileDashboardRowProps = PropsWithReactElementChildren<{
  row: number;
  col: MobileDashboardColSize;
}>;

export const MobileDashboardRow = styled.div<MobileDashboardRowProps>`
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
