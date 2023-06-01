import { ProjectPreview, UserPreview } from '@/__generated__/graphql';
import { VStack } from '@components/common';
import styled from '@emotion/styled';
import { ProjectSearchList } from './ProjectSearchList';
import { UserSearchList } from './UserSearchList';

type AboveTabletSearchResultProps = {
  users: UserPreview[];
  projects: ProjectPreview[];
  onUserSubmit: (name: string) => void;
  onProjectSubmit: (name: string) => void;
};

export const AboveTabletSearchResult = ({
  users,
  projects,
  onUserSubmit,
  onProjectSubmit,
}: AboveTabletSearchResultProps) => {
  return (
    <AboveTabletSearchResultLayout>
      {!!users.length && (
        <UserSearchList users={users} onSubmit={onUserSubmit} />
      )}
      {!!projects.length && (
        <ProjectSearchList projects={projects} onSubmit={onProjectSubmit} />
      )}
    </AboveTabletSearchResultLayout>
  );
};

const AboveTabletSearchResultLayout = styled(VStack)`
  position: absolute;
  top: 6rem;
  left: 0;
  width: 30rem;
  padding: 2.5rem;
  gap: 3rem;
  border-radius: 2rem;
  box-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
  background-color: ${({ theme }) => theme.colors.mono.white};
  z-index: ${({ theme }) => theme.zIndex.searchResult};
`;
