import { Skeleton } from '@components/common';
import styled from '@emotion/styled';

export const DashboardSkeletonItem = () => {
  return (
    <DashboardSkeletonItemLayout>
      <Skeleton />
    </DashboardSkeletonItemLayout>
  );
};

const DashboardSkeletonItemLayout = styled.div`
  width: 100%;
  height: 100%;
  padding: 0.2rem;
`;
