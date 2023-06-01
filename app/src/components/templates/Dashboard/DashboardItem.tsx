import styled from '@emotion/styled';

type DashboardItemProps = {
  row: number; // TODO: 더 엄밀한 Type 필요
  col: number;
  rowSpan: number;
  colSpan: number;
  content: React.FC;
};

export const DashboardItem = ({
  content: Content,
  ...propsExceptContent
}: DashboardItemProps) => {
  return (
    <DashboardItemLayout {...propsExceptContent}>
      <Content />
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
  grid-column: ${({ col, colSpan }) => `${col} / span ${colSpan}`};
  grid-row: ${({ row, rowSpan }) => `${row} / span ${rowSpan}`};
  border-radius: 2rem;
  background-color: ${({ theme }) => theme.colors.mono.white};
  box-shadow: 10px 10px 10px #eeeeee, -10px -10px 10px #ffffff;

  transition: all 0.3s;
  :hover {
    transform: scale(100.5%);
    box-shadow: 10px 10px 10px #dddddd, -10px -10px 10px #ffffff;
  }
  /* :active {
    box-shadow: inset 10px 10px 10px #f2f2f2, inset -10px -10px 10px #ffffff;
  } */
`;
