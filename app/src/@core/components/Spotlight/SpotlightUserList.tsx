import type { UserPreview } from '@shared/__generated__/graphql';
import { VStack } from '@shared/ui-kit';

import { SpotlightUserListItem } from '@core/components/Spotlight/SpotlightUserListItem';

type SpotlightUserListProps = {
  list: UserPreview[];
  startIndex: number;
};

export const SpotlightUserList = ({
  list,
  startIndex,
}: SpotlightUserListProps) => {
  return (
    <VStack w="100%" align="start">
      {list.map((item, index) => (
        <SpotlightUserListItem
          key={item.id}
          item={item}
          index={startIndex + index}
        />
      ))}
    </VStack>
  );
};
