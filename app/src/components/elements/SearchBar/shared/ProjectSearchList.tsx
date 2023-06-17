import { ProjectPreview } from '@/__generated__/graphql';
import { BoldText, Divider, VStack } from '@components/common';
import { ProjectSearchItem } from './ProjectSearchItem';

type ProjectSearchListProps = {
  projects: ProjectPreview[];
  onSubmit: (name: string) => void;
};

export const ProjectSearchList = ({
  projects,
  onSubmit,
}: ProjectSearchListProps) => {
  return (
    <VStack w="100%" align="start" spacing="1.2rem">
      <BoldText>프로젝트</BoldText>
      <Divider />
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
