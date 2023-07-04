import { VStack } from '@components/common';
import { MobileProjectSearchItem } from './MobileProjectSearchItem';
import { MobileProjectSearchResultProps } from './MobileProjectSearchResult';

type MobileProjectSearchListProps = MobileProjectSearchResultProps;

export const MobileProjectSearchList = ({
  projects,
  onSubmit,
}: MobileProjectSearchListProps) => {
  return (
    <VStack w="100%" align="start" spacing="1.2rem">
      {projects.slice(0, 4).map((project) => (
        <MobileProjectSearchItem
          key={project.id}
          project={project}
          onSubmit={onSubmit}
        />
      ))}
    </VStack>
  );
};
