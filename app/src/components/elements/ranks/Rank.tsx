import { VStack } from '@/components/common';
import { RankItem } from './RankItem';

export const Rank = ({ rankList, cnt, unit }: RankProp) => {
  return (
    <>
      <VStack spacing="2rem" align="flex-start">
        {rankList.map(({ id, name, value, imgUrl }, idx) =>
          idx < cnt ? (
            <RankItem
              rank={idx}
              name={name}
              value={value}
              imgUrl={imgUrl}
              key={id}
              unit={unit}
            />
          ) : null,
        )}
      </VStack>
    </>
  );
};
