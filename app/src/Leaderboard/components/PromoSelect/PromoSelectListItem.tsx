import dayjs from 'dayjs';

import { Promo } from '@shared/__generated__/graphql';
import { CaptionText, HStack, SelectItem, Text } from '@shared/ui-kit';

type PromoSelectListItemProps = {
  item: Promo;
};

export default function PromoSelectListItem({
  item,
}: PromoSelectListItemProps) {
  const { promo, beginAt } = item;

  const unit = '기';

  return (
    <SelectItem value={String(promo)} renderValue={`${promo}${unit}`}>
      <HStack spacing="2rem">
        <Text>
          {promo}
          {unit}
        </Text>
        <CaptionText>{dayjs(beginAt).format('YYYY. MM. DD.')}</CaptionText>
      </HStack>
    </SelectItem>
  );
}
