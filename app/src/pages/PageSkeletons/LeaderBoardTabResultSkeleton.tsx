import { Skeleton, VStack } from '@components/common';
import { useTheme } from '@emotion/react';

export const LeaderBoardTabResultSkeleton = () => {
  return (
    <VStack w="100%" spacing="5rem">
      <LeaderBoardItemSkeleteon />
      <VStack w="100%" spacing="1rem">
        {Array.from({ length: 50 }, (x) => x).map((_, idx) => (
          <LeaderBoardItemSkeleteon key={idx} />
        ))}
      </VStack>
    </VStack>
  );
};

const LeaderBoardItemSkeleteon = () => {
  const theme = useTheme();

  return <Skeleton h="5rem" radius={theme.radius.sm} />;
};
