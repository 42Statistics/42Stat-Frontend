import dayjs from 'dayjs';

import { Promo } from '@shared/__generated__/graphql';
import { CaptionText, HStack, SelectItem, Text } from '@shared/ui-kit';
import { numberWithUnitFormatter } from '@shared/utils/formatters/numberWithUnitFormatter';

type PromoSelectListItemProps = {
  item: Promo;
};

export function PromoSelectListItem({ item }: PromoSelectListItemProps) {
  const { promo, beginAt } = item;

  const unit = '기';

  return (
    <SelectItem
      value={promo.toString()}
      renderValue={numberWithUnitFormatter(promo, unit)}
    >
      <HStack spacing="2rem">
        <Text>{numberWithUnitFormatter(promo, unit)}</Text>
        <CaptionText>{dayjs(beginAt).format('YYYY. MM. DD.')}</CaptionText>
      </HStack>
    </SelectItem>
  );
}
