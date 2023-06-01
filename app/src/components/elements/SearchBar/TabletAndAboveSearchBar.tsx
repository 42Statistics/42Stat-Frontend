import styled from '@emotion/styled';
import { isEnterKeyReleased } from '@utils/isEnterKeyReleased';
import { useEffect, useState } from 'react';
import { TabletAndAboveSearchInput } from './TabletAndAboveSearchInput';
import { TabletAndAboveSearchResult } from './TabletAndAboveSearchResult';
import { useSearchBar } from './hooks';

// TODO: SearchBar 추상화
export const TabletAndAboveSearchBar = () => {
  const {
    setInput,
    debouncedInput,
    inputRef,
    searchUser,
    searchProject,
    users,
    projects,
    handleUserSubmit,
    handleProjectSubmit,
  } = useSearchBar();

  const [isFocused, setIsFocused] = useState<boolean>(false);
  const isPreviewDisplaying =
    debouncedInput !== '' && (!!users.length || !!projects.length);

  useEffect(() => {
    searchUser({
      variables: { login: debouncedInput },
    });
    searchProject({
      variables: { name: debouncedInput },
    });
  }, [debouncedInput, searchUser, searchProject]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isEnterKeyReleased(e)) {
      return;
    }
    if (users.length === 0) {
      if (projects.length === 0) {
        return;
      }
      handleProjectSubmit(projects[0].name);
    }
    handleUserSubmit(users[0].login);
  };

  return (
    <TabletAndAboveSearchBarLayout isFocused={isFocused}>
      <TabletAndAboveSearchInput
        inputRef={inputRef}
        setInput={setInput}
        onKeyDown={handleKeyDown}
        setIsFocused={setIsFocused}
      />
      {isPreviewDisplaying && (
        <TabletAndAboveSearchResult
          users={users}
          onUserSubmit={handleUserSubmit}
          projects={projects}
          onProjectSubmit={handleProjectSubmit}
        />
      )}
    </TabletAndAboveSearchBarLayout>
  );
};

export const TabletAndAboveSearchBarLayout = styled.div<{
  isFocused: boolean;
}>`
  position: relative;
  padding: 1rem 2rem;
  border-radius: 2rem;
  transition: all 0.5s;

  box-shadow: ${({ isFocused }) =>
    !isFocused
      ? '8px 8px 10px #eeeeee, -8px -8px 10px #ffffff'
      : '8px 8px 10px #dddddd, -8px -8px 10px #ffffff'};

  :hover {
    box-shadow: 8px 8px 10px #dddddd, -8px -8px 10px #ffffff;
  }
`;
