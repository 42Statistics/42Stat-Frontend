import { ProjectPreview } from '@shared/__generated__/graphql';
import { VStack } from '@shared/ui-kit';
import { SpotlightProjectListItem } from './SpotlightProjectListItem';

type SpotlightProjectListProps = {
  list: ProjectPreview[];
  startIndex: number;
};

export const SpotlightProjectList = ({
  list,
  startIndex,
}: SpotlightProjectListProps) => {
  return (
    <VStack w="100%" align="start">
      {list.map((item, index) => (
        <SpotlightProjectListItem
          key={item.id}
          item={item}
          index={startIndex + index}
        />
      ))}
    </VStack>
  );
};
