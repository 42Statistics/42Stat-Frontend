import { VStack } from '@components/common';
import type { RankUserItemType } from '@utils/types/Rank';
import { RankUserItem } from './RankUserItem';

type RankUserProps = {
  rankList: RankUserItemType[];
  showImg?: boolean;
  cnt: number;
  unit: string;
};

export const RankUser = ({
  rankList,
  showImg = true,
  cnt,
  unit,
}: RankUserProps) => {
  return (
    <VStack w="100%" h="100%" spacing="2rem">
      {rankList.slice(0, cnt).map((rankItem, idx) => (
        <RankUserItem
          key={rankItem.id}
          rank={idx + 1}
          item={rankItem}
          showImg={showImg}
          unit={unit}
        />
      ))}
    </VStack>
  );
};
