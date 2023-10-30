import type { Coalition } from '@shared/types/Coalition';
import { CaptionText, HStack, SelectItem, Text } from '@shared/ui-kit';

type CoalitionSelectListItemProps = {
  item: Coalition;
};

export const CoalitionSelectListItem = ({
  item,
}: CoalitionSelectListItemProps) => {
  const { id, name } = item;

  return (
    <SelectItem value={id.toString()} renderValue={name}>
      <HStack spacing="2rem">
        <Text>{name}</Text>
        <CaptionText></CaptionText>
      </HStack>
    </SelectItem>
  );
};
