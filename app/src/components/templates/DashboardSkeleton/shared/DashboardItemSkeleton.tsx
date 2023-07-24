import styled from '@emotion/styled';
import { Skeleton } from '@shared/ui-kit';

export const DashboardItemSkeleton = () => {
  return (
    <Layout>
      <Skeleton />
    </Layout>
  );
};

const Layout = styled.div`
  width: 100%;
  height: 100%;
`;
