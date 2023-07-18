import { UserPreview } from '@/__generated__/graphql';
import { VStack } from '@components/common';
import { SearchDialogFindUserResultListItem } from './SearchDialogFindUserResultListItem';

type SearchDialogFindUserResultListProps = {
  list: UserPreview[];
  startIndex: number;
};

export const SearchDialogFindUserResultList = ({
  list,
  startIndex,
}: SearchDialogFindUserResultListProps) => {
  return (
    <VStack w="100%" align="start">
      {list.map((item, index) => (
        <SearchDialogFindUserResultListItem
          key={item.id}
          item={item}
          index={startIndex + index}
        />
      ))}
    </VStack>
  );
};
