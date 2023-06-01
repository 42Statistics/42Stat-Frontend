import { Skeleton, VStack } from '@components/common';
import styled from '@emotion/styled';

export const LeaderBoardTabSkeleton = () => {
  return (
    <VStack w="100%" spacing="2.5rem" align="start">
      <SegmentedControlSkeleton />
      <Skeleton style={{ height: '65px' }} />
      <VStack w="100%" spacing="1rem">
        {Array.from(Array(50)).map((val) => (
          <Skeleton key={val} style={{ height: '65px' }} />
        ))}
      </VStack>
    </VStack>
  );
};

const SegmentedControlSkeleton = styled(Skeleton)`
  width: 100px;
  height: 40px;
  border-radius: 2rem;
`;
