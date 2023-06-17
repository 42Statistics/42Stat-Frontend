import { VStack } from '@components/common';
import type { RankingUserItemType } from '@utils/types/Ranking';
import { RankingUserItem } from './RankingUserItem';

type RankingUserProps = {
  list: RankingUserItemType[];
  showImg?: boolean;
  cnt: number;
  unit: string;
};

export const RankingUser = ({
  list,
  showImg = true,
  cnt,
  unit,
}: RankingUserProps) => {
  return (
    <VStack w="100%" h="100%" spacing="2rem">
      {list.slice(0, cnt).map((item) => (
        <RankingUserItem
          key={item.id}
          item={item}
          showImg={showImg}
          unit={unit}
        />
      ))}
    </VStack>
  );
};
