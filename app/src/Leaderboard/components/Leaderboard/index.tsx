import type { UserRank } from '@shared/__generated__/graphql';
import { VStack } from '@shared/ui-kit';

import { LeaderboardList } from '@/Leaderboard/components/Leaderboard/LeaderboardList';
import { LeaderboardListItem } from '@/Leaderboard/components/Leaderboard/LeaderboardListItem';

type LeaderboardProps = {
  list: UserRank[];
  me?: UserRank | null;
  unit?: string;
  fixedNumber?: number;
};

export const Leaderboard = ({
  list,
  me,
  unit,
  fixedNumber,
}: LeaderboardProps) => {
  return (
    <VStack w="100%" spacing="2rem">
      {me != null ? (
        <LeaderboardListItem
          item={me}
          unit={unit}
          fixedNumber={fixedNumber}
          isMe
        />
      ) : null}
      <LeaderboardList
        list={list}
        me={me}
        unit={unit}
        fixedNumber={fixedNumber}
      />
    </VStack>
  );
};
