import styled from '@emotion/styled';
import { ReactNode } from 'react';

type MobileDashboardRowSize = 1 | 2;
type MobileDashboardColSize = 1 | 2;

type MobileDashboardRowProps = {
  row: MobileDashboardRowSize;
  col: MobileDashboardColSize;
  children: ReactNode;
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
  row: MobileDashboardRowSize;
  col: MobileDashboardColSize;
};

const MobileDashboardRowLayout = styled.div<MobileDashboardRowLayoutProps>`
  display: grid;
  width: 100%;
  grid-template-columns: ${({ col }) => `repeat(${col}, 1fr)`};
  grid-template-rows: ${({ row, col }) =>
    `repeat(${row}, ${col === 2 ? '8rem' : '35rem'})`};
  column-gap: 1.5rem;
  row-gap: 1.5rem;
`;
