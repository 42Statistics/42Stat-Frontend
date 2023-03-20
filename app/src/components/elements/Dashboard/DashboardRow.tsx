import { getDevice } from '@/styles/responsive/getDevice';
import styled from '@emotion/styled';
import { ReactNode } from 'react';

type DashboardRowProps = {
  row: number;
  col: number;
  children: ReactNode;
};

const getHeight = (device: Device, row: number, col: number) => {
  // FIXME: DashboardRow에 대한 전반적 고민 필요
  return '30rem';
};

export const DashboardRow = ({ row, col, children }: DashboardRowProps) => {
  const device = getDevice(); // FIXME: 여기서 getDevice를 하는게 맞나?

  return (
    <DashboardRowLayout h={getHeight(device, row, col)}>
      {children}
    </DashboardRowLayout>
  );
};

type DashboardRowLayoutProps = {
  h: string;
};

const DashboardRowLayout = styled.div<DashboardRowLayoutProps>`
  display: grid;
  width: 100em;
  height: ${({ h }) => h};
`;
