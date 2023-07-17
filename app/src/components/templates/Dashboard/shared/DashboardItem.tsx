import styled from '@emotion/styled';
import { CustomBox } from '@styles/custom/CustomBox';

type DashboardItemProps = {
  row: number; // TODO: 더 엄밀한 Type 필요
  col: number;
  rowSpan: number;
  colSpan: number;
  content: React.FC;
};

export const DashboardItem = ({
  content: Content,
  ...props
}: DashboardItemProps) => {
  return (
    <Layout {...props}>
      <Content />
    </Layout>
  );
};

type LayoutProps = Omit<DashboardItemProps, 'content'>;

const Layout = styled(CustomBox)<LayoutProps>`
  grid-column: ${({ col, colSpan }) => `${col} / span ${colSpan}`};
  grid-row: ${({ row, rowSpan }) => `${row} / span ${rowSpan}`};
`;
