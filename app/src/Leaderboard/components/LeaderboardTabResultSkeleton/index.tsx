import { Skeleton, VStack } from '@components/common';
import { useTheme } from '@emotion/react';

export const LeaderboardTabResultSkeleton = () => {
  return (
    <VStack w="100%" spacing="6rem">
      <LeaderboardListItemSkeleteon />
      <VStack w="100%" spacing="0.5rem">
        {Array.from({ length: 50 }, (x) => x).map((_, idx) => (
          <LeaderboardListItemSkeleteon key={idx} />
        ))}
      </VStack>
    </VStack>
  );
};

const LeaderboardListItemSkeleteon = () => {
  const theme = useTheme();

  return <Skeleton h="5rem" radius={theme.radius.sm} />;
};
