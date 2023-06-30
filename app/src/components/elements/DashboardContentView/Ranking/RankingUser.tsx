import { RankingUserItemType } from '@/types/Ranking';
import { VStack } from '@components/common';
import { ROUTES } from '@routes/ROUTES';
import { RankingItem } from './RankingItem';

type RankingUserProps = {
  list: RankingUserItemType[];
  cnt: number;
  unit: string;
};

export const RankingUser = ({ list, cnt, unit }: RankingUserProps) => {
  return (
    <VStack w="100%" h="100%" spacing="2rem">
      {list.slice(0, cnt).map((item) => (
        <RankingItem
          key={item.id}
          item={item}
          link={`${ROUTES.PROFILE_ROOT}/${item.name}`}
          unit={unit}
        />
      ))}
    </VStack>
  );
};
