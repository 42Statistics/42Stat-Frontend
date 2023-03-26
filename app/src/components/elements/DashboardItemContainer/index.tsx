import styled from '@emotion/styled';
import { ReactNode } from 'react';

type DashboardItemContainerProps = {
  row: number; // TODO: 더 엄밀한 Type 필요
  col: number;
  rowSpan: number;
  colSpan: number;
  element: ReactNode;
};

export const DashboardItemContainer = ({
  element,
  ...propsExceptElement
}: DashboardItemContainerProps) => {
  return (
    <DashboardItemContainerLayout {...propsExceptElement}>
      {element}
    </DashboardItemContainerLayout>
  );
};

type DashboardItemContainerLayoutProps = {
  col: number;
  colSpan: number;
  row: number;
  rowSpan: number;
};

const DashboardItemContainerLayout = styled.div<DashboardItemContainerLayoutProps>`
  background-color: ${({ theme }) => theme.colors.mono.white};
  grid-column: ${({ col, colSpan }) => `${col} / span ${colSpan}`};
  grid-row: ${({ row, rowSpan }) => `${row} / span ${rowSpan}`};
  border-radius: 2rem;

  transition: box-shadow 200ms ease-in-out, transform 200ms ease-in-out;
  :hover {
    box-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
  }
`;
