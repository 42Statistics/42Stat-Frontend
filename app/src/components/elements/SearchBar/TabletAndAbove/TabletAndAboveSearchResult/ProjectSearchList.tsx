import { VStack } from '@components/common';
import { ProjectSearchItem } from './ProjectSearchItem';
import { ProjectSearchResultProps } from './ProjectSearchResult';

type ProjectSearchListProps = ProjectSearchResultProps;

export const ProjectSearchList = ({
  projects,
  onSubmit,
}: ProjectSearchListProps) => {
  return (
    <VStack w="100%" align="start" spacing="1.2rem">
      {projects.slice(0, 4).map((project) => (
        <ProjectSearchItem
          key={project.id}
          project={project}
          onSubmit={onSubmit}
        />
      ))}
    </VStack>
  );
};
