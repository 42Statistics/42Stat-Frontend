import styled from '@emotion/styled';
import { rgba } from 'emotion-rgba';

type DashboardItemWrapperProps = {
  row: number; // TODO: 더 엄밀한 Type 필요
  col: number;
  rowSpan: number;
  colSpan: number;
  element: React.ReactNode;
};

export const DashboardItemWrapper = ({
  element,
  ...propsExceptElement
}: DashboardItemWrapperProps) => {
  return (
    <DashboardItemWrapperLayout {...propsExceptElement}>
      {element}
    </DashboardItemWrapperLayout>
  );
};

type DashboardItemWrapperLayoutProps = {
  col: number;
  colSpan: number;
  row: number;
  rowSpan: number;
};

const DashboardItemWrapperLayout = styled.div<DashboardItemWrapperLayoutProps>`
  grid-column: ${({ col, colSpan }) => `${col} / span ${colSpan}`};
  grid-row: ${({ row, rowSpan }) => `${row} / span ${rowSpan}`};
  border-radius: 2rem;
  background-color: ${({ theme }) => rgba(theme.colors.mono.white, 0.85)};

  transition: all 0.2s;
  :hover {
    background-color: ${({ theme }) => rgba(theme.colors.mono.white, 1)};
  }
`;
