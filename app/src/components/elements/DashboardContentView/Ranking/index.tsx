import type { RankingItemType } from '@/types/Ranking';
import { VStack } from '@components/common';
import { RankingItem } from './RankingItem';

type RankingProps = {
  list: RankingItemType[];
  cnt: number;
  unit: string;
};

export const Ranking = ({ list, cnt, unit }: RankingProps) => {
  return (
    <VStack w="100%" h="100%" spacing="2rem">
      {list.slice(0, cnt).map((item) => (
        <RankingItem key={item.id} item={item} unit={unit} />
      ))}
    </VStack>
  );
};
