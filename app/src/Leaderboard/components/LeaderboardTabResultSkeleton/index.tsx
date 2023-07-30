import { VStack } from '@shared/ui-kit';

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
  return <div style={{ width: '100%', height: '5rem' }} />;
};
