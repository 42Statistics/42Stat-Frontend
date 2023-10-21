import styled from '@emotion/styled';

import type { DashboardRowItemProps } from '@shared/components/Dashboard/DashboardRowItem';
import { Skeleton } from '@shared/ui-kit';

type DashboardRowItemSkeletonProps = Omit<DashboardRowItemProps, 'content'>;

export const DashboardRowItemSkeleton = ({
  ...props
}: DashboardRowItemSkeletonProps) => {
  return (
    <Layout {...props}>
      <Skeleton />
    </Layout>
  );
};

type LayoutProps = Omit<DashboardRowItemProps, 'content'>;

const Layout = styled.div<LayoutProps>`
  grid-column: ${({ colSpan }) => `span ${colSpan}`};
  grid-row: ${({ rowSpan }) => `span ${rowSpan}`};
`;
