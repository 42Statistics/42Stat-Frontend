import { VStack } from '@/components/common';
import { RankItemType } from '@/utils/types/Rank';
import { RankItem } from './RankItem';

type RankProps = {
  rankList: RankItemType[];
  cnt: number;
  unit: string;
};

export const Rank = ({ rankList, cnt, unit }: RankProps) => {
  return (
    <VStack w="100%" spacing="2rem" align="start">
      {rankList.map((rankItem, idx) => {
        const rank = idx + 1;
        return rank <= cnt ? (
          <RankItem key={idx} rank={idx + 1} item={rankItem} unit={unit} />
        ) : null;
      })}
    </VStack>
  );
};
