import styled from '@emotion/styled';
import type { DashboardItemProps } from '@shared/components/Dashboard/shared/DashboardItem';
import { Skeleton } from '@shared/ui-kit';

type DashboardItemSkeletonProps = Omit<DashboardItemProps, 'content'>;

export const DashboardItemSkeleton = ({
  ...props
}: DashboardItemSkeletonProps) => {
  return (
    <Layout {...props}>
      <Skeleton />
    </Layout>
  );
};

type LayoutProps = Omit<DashboardItemProps, 'content'>;

const Layout = styled.div<LayoutProps>`
  grid-column: ${({ col, colSpan }) => `${col} / span ${colSpan}`};
  grid-row: ${({ row, rowSpan }) => `${row} / span ${rowSpan}`};
`;
