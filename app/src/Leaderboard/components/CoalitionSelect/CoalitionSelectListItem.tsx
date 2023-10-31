import { CoalitionMark } from '@shared/components/CoalitionMark';
import type { Coalition } from '@shared/types/Coalition';
import { HStack, SelectItem, Text } from '@shared/ui-kit';

type CoalitionSelectListItemProps = {
  item: Coalition;
};

export const CoalitionSelectListItem = ({
  item,
}: CoalitionSelectListItemProps) => {
  const { id, name } = item;

  return (
    <SelectItem value={id.toString()} renderValue={name}>
      <HStack spacing="1.5rem">
        <CoalitionMark coalition={item} />
        <Text>{name}</Text>
      </HStack>
    </SelectItem>
  );
};
