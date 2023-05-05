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
      {rankList.map((rankItem, idx) => {
        const rank = idx + 1;
        return rank <= cnt ? (
          <RankItem
            key={idx}
            rank={idx + 1}
            item={rankItem}
            showImg={showImg}
            unit={unit}
          />
        ) : null;
      })}
    </VStack>
  );
};
