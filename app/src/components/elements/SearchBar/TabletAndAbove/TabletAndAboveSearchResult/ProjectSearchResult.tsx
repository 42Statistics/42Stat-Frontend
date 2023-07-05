import { ProjectPreview } from '@/__generated__/graphql';
import { BoldText, Divider, VStack } from '@components/common';
import { ProjectSearchList } from './ProjectSearchList';

export type ProjectSearchResultProps = {
  projects: ProjectPreview[];
  onSubmit: (name: string) => void;
};

export const ProjectSearchResult = (props: ProjectSearchResultProps) => {
  return (
    <VStack w="100%" align="start" spacing="1.2rem">
      <BoldText>프로젝트</BoldText>
      <Divider />
      <ProjectSearchList {...props} />
    </VStack>
  );
};
