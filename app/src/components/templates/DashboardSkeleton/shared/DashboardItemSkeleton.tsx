import { Skeleton } from '@components/common';
import styled from '@emotion/styled';

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
  padding: 0.2rem;
`;
