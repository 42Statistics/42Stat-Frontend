import { VStack } from '@shared/ui-kit';
import { LeaderboardListItemSkeleteon } from './LeaderboardListItemSkeleton';

export const LeaderboardResultSkeleton = () => {
  return (
    <VStack w="100%" spacing="2rem" style={{ marginTop: '4rem' }}>
      <LeaderboardListItemSkeleteon />
      <VStack w="100%" spacing="0.5rem">
        {Array.from({ length: 50 }, (x) => x).map((_, idx) => (
          <LeaderboardListItemSkeleteon key={idx} />
        ))}
      </VStack>
    </VStack>
  );
};
