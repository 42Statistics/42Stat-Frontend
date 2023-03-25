import { Center } from '@/components/common';
import styled from '@emotion/styled';
import { ReactNode } from 'react';

type DashboardItemProps = {
  row: number; // TODO: 더 엄밀한 Type 필요
  col: number;
  rowSpan: number;
  colSpan: number;
  children: ReactNode;
};

export const DashboardItem = ({
  children,
  ...propsExceptChildren
}: DashboardItemProps) => {
  return (
    <DashboardItemLayout {...propsExceptChildren}>
      <Center w="100%" h="100%">
        {children}
      </Center>
    </DashboardItemLayout>
  );
};

type DashboardItemLayoutProps = {
  col: number;
  colSpan: number;
  row: number;
  rowSpan: number;
};

const DashboardItemLayout = styled.div<DashboardItemLayoutProps>`
  background-color: ${({ theme }) => theme.colors.mono.white};
  grid-column: ${({ col, colSpan }) => `${col} / span ${colSpan}`};
  grid-row: ${({ row, rowSpan }) => `${row} / span ${rowSpan}`};
  border-radius: 2rem;

  transition: box-shadow 200ms ease-in-out, transform 200ms ease-in-out;
  :hover {
    box-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
  }
`;
