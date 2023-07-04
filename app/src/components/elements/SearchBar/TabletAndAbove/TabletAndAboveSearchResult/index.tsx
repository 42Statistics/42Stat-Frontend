import { ProjectPreview, UserPreview } from '@/__generated__/graphql';
import styled from '@emotion/styled';
import { ProjectSearchResult } from './ProjectSearchResult';
import { UserSearchResult } from './UserSearchResult';

type TabletAndAboveSearchResultProps = {
  users: UserPreview[];
  projects: ProjectPreview[];
  onUserSubmit: (name: string) => void;
  onProjectSubmit: (name: string) => void;
};

export const TabletAndAboveSearchResult = ({
  users,
  projects,
  onUserSubmit,
  onProjectSubmit,
}: TabletAndAboveSearchResultProps) => {
  return (
    <Layout>
      {!!users.length && (
        <UserSearchResult users={users} onSubmit={onUserSubmit} />
      )}
      {!!projects.length && (
        <ProjectSearchResult projects={projects} onSubmit={onProjectSubmit} />
      )}
    </Layout>
  );
};

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 6rem;
  left: 0;
  width: 30rem;
  padding: 2.5rem;
  gap: 3rem;
  border-radius: ${({ theme }) => theme.radius.md};
  box-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
  background-color: ${({ theme }) => theme.colors.mono.white};
  z-index: ${({ theme }) => theme.zIndex.searchResult};
`;