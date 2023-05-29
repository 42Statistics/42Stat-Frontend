import { VStack } from '@/components/common';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const DashboardSkeletonItem = () => {
  return (
    <DashboardSkeletonItemLayout>
      <VStack w="100%" h="100%" spacing="2rem" align="start">
        {/* <DashboardSkeletonItemHeader /> */}
        <DashboardSkeletonItemContents />
      </VStack>
    </DashboardSkeletonItemLayout>
  );
};

const DashboardSkeletonItemLayout = styled.div`
  width: 100%;
  height: 100%;
  padding: 0.2rem;
  /* padding: 2rem; */
`;

const skeletonBackgroundAnimation = css`
  background: #eeeeee;
  background: linear-gradient(110deg, #eeeeee 8%, #f5f5f5 18%, #eeeeee 33%);
  background-size: 200% 100%;
  animation: 1.4s shine linear infinite;

  @keyframes shine {
    to {
      background-position-x: -200%;
    }
  }
`;

// const DashboardSkeletonItemHeader = styled.div`
//   width: 100%;
//   height: 3rem;
//   border-radius: 1.4rem;
//   ${skeletonBackgroundAnimation}
// `;

const DashboardSkeletonItemContents = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 1.4rem;
  ${skeletonBackgroundAnimation}
`;
