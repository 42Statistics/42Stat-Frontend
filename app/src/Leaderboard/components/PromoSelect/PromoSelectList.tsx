import { PromoSelectListItem } from '@/Leaderboard/components/PromoSelect/PromoSelectListItem';
import type { Promo } from '@shared/types/Promo';
import { HStack, SelectItem, Text } from '@shared/ui-kit';

type PromoSelectListProps = {
  list: Promo[];
};

export const PromoSelectList = ({ list }: PromoSelectListProps) => {
  return (
    <>
      <SelectItem value={null}>
        <HStack spacing="2rem">
          <Text>전체 기수 보기</Text>
        </HStack>
      </SelectItem>
      {list.map((item) => (
        <PromoSelectListItem key={item.promo} item={item} />
      ))}
    </>
  );
};
