import { Divider, Skeleton, VStack } from '@components/common';

export const LeaderBoardTabResultSkeleton = () => {
  return (
    <VStack w="100%" spacing="5rem">
      <LeaderBoardItemSkeleteon />
      <Divider />
      <VStack w="100%" spacing="1rem">
        {Array.from({ length: 50 }, (x) => x).map((_, idx) => (
          <LeaderBoardItemSkeleteon key={idx} />
        ))}
      </VStack>
    </VStack>
  );
};

const LeaderBoardItemSkeleteon = () => {
  return <Skeleton style={{ height: '50px' }} />;
};

// const SegmentedControlSkeleton = styled(Skeleton)`
//   width: 100px;
//   height: 40px;
//   border-radius: 2rem;
// `;
