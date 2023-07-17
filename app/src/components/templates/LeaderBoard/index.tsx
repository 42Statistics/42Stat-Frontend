import { RankingUserItemType } from '@/types/Ranking';
import { VStack } from '@components/common';
import { LeaderboardList } from './LeaderboardList';
import { LeaderboardListItem } from './LeaderboardListItem';

type LeaderboardProps = {
  me: RankingUserItemType | null;
  list: RankingUserItemType[];
  unit: string;
  fixedNumber?: number;
};
export const Leaderboard = ({
  me,
  list,
  unit,
  fixedNumber,
}: LeaderboardProps) => {
  return (
    <VStack w="100%" spacing="6rem">
      {me && (
        <LeaderboardListItem
          item={me}
          unit={unit}
          fixedNumber={fixedNumber}
          isMe
        />
      )}
      <LeaderboardList
        list={list}
        me={me}
        unit={unit}
        fixedNumber={fixedNumber}
      />
    </VStack>
  );
};
