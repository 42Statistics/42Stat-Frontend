import type { RankingUserItemType } from '@/types/Ranking';
import { VStack } from '@components/common';
import { RankingUserItem } from './RankingUserItem';

type RankingUserProps = {
  list: RankingUserItemType[];
  cnt: number;
  unit: string;
};

export const RankingUser = ({ list, cnt, unit }: RankingUserProps) => {
  return (
    <VStack w="100%" h="100%" spacing="2rem">
      {list.slice(0, cnt).map((item) => (
        <RankingUserItem key={item.id} item={item} unit={unit} />
      ))}
    </VStack>
  );
};
