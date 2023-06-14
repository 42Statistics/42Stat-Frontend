import { VStack } from '@components/common';
import type { RankItemType } from '@utils/types/Rank';
import { RankItem } from './RankItem';

type RankProps = {
  rankList: RankItemType[];
  cnt: number;
  unit: string;
};

export const Rank = ({ rankList, cnt, unit }: RankProps) => {
  return (
    <VStack w="100%" h="100%" spacing="2rem">
      {rankList.slice(0, cnt).map((rankItem) => (
        <RankItem key={rankItem.id} item={rankItem} unit={unit} />
      ))}
    </VStack>
  );
};
