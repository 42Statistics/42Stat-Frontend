import { Promo } from '@shared/__generated__/graphql';
import { HStack, SelectItem, Text } from '@shared/ui-kit';

import { PromoSelectListItem } from './PromoSelectListItem';

type PromoSelectListProps = {
  list: Promo[];
};

export function PromoSelectList({ list }: PromoSelectListProps) {
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
}
