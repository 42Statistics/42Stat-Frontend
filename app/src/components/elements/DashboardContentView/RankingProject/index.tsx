import type { RankingItemType } from '@/types/Ranking';
import { VStack } from '@components/common';
import { RankingProjectItem } from './RankingProjectItem';

type RankingProjectProps = {
  list: RankingItemType[];
  cnt: number;
  unit: string;
};

export const RankingProject = ({ list, cnt, unit }: RankingProjectProps) => {
  return (
    <VStack w="100%" h="100%" spacing="2rem">
      {list.slice(0, cnt).map((item) => (
        <RankingProjectItem key={item.id} item={item} unit={unit} />
      ))}
    </VStack>
  );
};
