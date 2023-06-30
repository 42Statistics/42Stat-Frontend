import { RankingItemType } from '@/types/Ranking';
import { VStack } from '@components/common';
import { ROUTES } from '@routes/ROUTES';
import { RankingItem } from './RankingItem';

type RankingProjectProps = {
  list: RankingItemType[];
  cnt: number;
  unit: string;
};

export const RankingProject = ({ list, cnt, unit }: RankingProjectProps) => {
  return (
    <VStack w="100%" h="100%" spacing="2rem">
      {list.slice(0, cnt).map((item) => (
        <RankingItem
          key={item.id}
          item={item}
          link={`${ROUTES.PROJECT_ROOT}/${item.name}`}
          unit={unit}
        />
      ))}
    </VStack>
  );
};
