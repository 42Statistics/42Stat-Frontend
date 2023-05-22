import { VStack } from '@/components/common';
import type { RankItemType } from '@/utils/types/Rank';
import { RankItem } from './RankItem';

type RankProps = {
  rankList: RankItemType[];
  showImg?: boolean;
  cnt: number;
  unit: string;
};

export const Rank = ({ rankList, showImg = true, cnt, unit }: RankProps) => {
  return (
    <VStack w="100%" h="100%" spacing="2rem">
      {rankList.slice(0, cnt).map((rankItem, idx) => (
        <RankItem
          key={idx}
          rank={idx + 1}
          item={rankItem}
          showImg={showImg}
          unit={unit}
        />
      ))}
    </VStack>
  );
};
