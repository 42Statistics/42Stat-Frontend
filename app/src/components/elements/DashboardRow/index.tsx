import styled from '@emotion/styled';
import { ReactNode } from 'react';

type DashboardRowProps = {
  itemByRow: 3 | 4;
  children: ReactNode;
};

export const DashboardRow = ({ itemByRow, children }: DashboardRowProps) => {
  return (
    <DashboardRowLayout itemByRow={itemByRow}>{children}</DashboardRowLayout>
  );
};

type DashboardRowLayoutProps = {
  itemByRow: 3 | 4;
};

// TODO: 반응형으로 정사각형 모양 유지하도록 (아니면 태블릿 UI도 만들던가)
const DashboardRowLayout = styled.div<DashboardRowLayoutProps>`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(itemByRow, 1fr);
  grid-template-rows: repeat(
    2,
    ${({ itemByRow }) => (itemByRow === 4 ? '135px' : '180px')}
  );
  column-gap: 20px;
  row-gap: 20px;
`;
