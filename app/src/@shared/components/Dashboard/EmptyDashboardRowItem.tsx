import styled from '@emotion/styled';

import { DashboardRowItemProps } from '@shared/types/Dashboard';

export const EmptyDashboardRowItem = ({
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

const Layout = styled.div<LayoutProps>`
  width: 100%;
  height: 100%;
  grid-column: ${({ colSpan }) => `span ${colSpan}`};
  grid-row: ${({ rowSpan }) => `span ${rowSpan}`};
`;
