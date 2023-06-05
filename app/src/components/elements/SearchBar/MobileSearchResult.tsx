import { ProjectPreview, UserPreview } from '@/__generated__/graphql';
import { VStack } from '@components/common';
import { ProjectSearchList } from './ProjectSearchList';
import { UserSearchList } from './UserSearchList';

type MobileSearchResultProps = {
  users: UserPreview[];
  projects: ProjectPreview[];
  onUserSubmit: (name: string) => void;
  onProjectSubmit: (name: string) => void;
};

export const MobileSearchResult = ({
  users,
  projects,
  onUserSubmit,
  onProjectSubmit,
}: MobileSearchResultProps) => {
  return (
    <VStack w="100%" spacing="4rem">
      {!!users.length && (
        <UserSearchList users={users} onSubmit={onUserSubmit} />
      )}
      {!!projects.length && (
        <ProjectSearchList projects={projects} onSubmit={onProjectSubmit} />
      )}
    </VStack>
  );
};
