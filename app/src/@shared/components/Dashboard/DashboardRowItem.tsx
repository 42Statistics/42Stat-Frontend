import styled from '@emotion/styled';
import { CustomBox } from '@shared/ui-kit-styled';

export type DashboardRowItemProps = {
  rowSpan: number;
  colSpan: number;
  content: React.FC;
};

export const DashboardRowItem = ({
  content: Content,
  ...props
}: DashboardRowItemProps) => {
  return (
    <Layout {...props}>
      <Content />
    </Layout>
  );
};

type LayoutProps = Omit<DashboardRowItemProps, 'content'>;

const Layout = styled(CustomBox)<LayoutProps>`
  grid-column: ${({ colSpan }) => `span ${colSpan}`};
  grid-row: ${({ rowSpan }) => `span ${rowSpan}`};
`;
