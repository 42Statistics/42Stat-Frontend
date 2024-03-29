import type { Coalition } from '@shared/types/Coalition';
import { HStack, SelectItem, Text } from '@shared/ui-kit';

import { CoalitionSelectListItem } from '@/Leaderboard/components/CoalitionSelect/CoalitionSelectListItem';

type CoalitionSelectListProps = {
  list: Coalition[];
};

export const CoalitionSelectList = ({ list }: CoalitionSelectListProps) => {
  return (
    <>
      <SelectItem value={null}>
        <HStack spacing="2rem">
          <Text>전체 코알리숑 보기</Text>
        </HStack>
      </SelectItem>
      {list.map((item) => (
        <CoalitionSelectListItem key={item.name} item={item} />
      ))}
    </>
  );
};
