import { UserPreview } from '@/__generated__/graphql';
import { VStack } from '@components/common';
import { SpotlightUserListItem } from './SpotlightUserListItem';

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
