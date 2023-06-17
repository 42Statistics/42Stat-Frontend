import { Skeleton, VStack } from '@components/common';
import styled from '@emotion/styled';

export const ProjectPageSkeleton = () => {
  return (
    <ProjectPageSkeletonLayout>
      <VStack w="100%" spacing="4rem">
        <Skeleton style={{ width: '200px', height: '70px' }} />
        <VStack spacing="1.5rem">
          <Skeleton style={{ width: '300px', height: '35px' }} />
          <Skeleton style={{ width: '300px', height: '35px' }} />
        </VStack>
        <VStack spacing="1.5rem">
          <Skeleton style={{ width: '300px', height: '35px' }} />
          <Skeleton style={{ width: '300px', height: '35px' }} />
        </VStack>
        <Skeleton style={{ width: '400px', height: '100px' }} />
        <VStack spacing="1.5rem">
          <Skeleton style={{ width: '300px', height: '35px' }} />
          <Skeleton style={{ width: '300px', height: '35px' }} />
        </VStack>
        <Skeleton
          style={{ width: '250px', height: '250px', borderRadius: '50%' }}
        />
      </VStack>
    </ProjectPageSkeletonLayout>
  );
};

const ProjectPageSkeletonLayout = styled.div`
  padding-top: 4rem;
`;
