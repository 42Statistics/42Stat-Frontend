import { ProjectPreview } from '@/__generated__/graphql';
import { VStack } from '@components/common';
import { SearchDialogFindProjectResultListItem } from './SearchDialogFindProjectResultListItem';

type SearchDialogFindProjectResultListProps = {
  list: ProjectPreview[];
  startIndex: number;
};

export const SearchDialogFindProjectResultList = ({
  list,
  startIndex,
}: SearchDialogFindProjectResultListProps) => {
  return (
    <VStack w="100%" align="start">
      {list.map((item, index) => (
        <SearchDialogFindProjectResultListItem
          key={item.id}
          item={item}
          index={startIndex + index}
        />
      ))}
    </VStack>
  );
};
