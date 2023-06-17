import styled from '@emotion/styled';
import { isEnterKeyReleased } from '@utils/isEnterKeyReleased';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSearchBar } from '../hooks/useSearchBar';
import { TabletAndAboveSearchInput } from './TabletAndAboveSearchInput';
import { TabletAndAboveSearchResult } from './TabletAndAboveSearchResult';

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
    resetInput,
  } = useSearchBar();

  const [isFocused, setIsFocused] = useState<boolean>(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isPreviewDisplaying =
    debouncedInput !== '' && (!!users.length || !!projects.length);

  const handleUserSubmit = (name: string) => {
    resetInput();
    navigate(`/profile/${name}`);
  };

  const handleProjectSubmit = (name: string) => {
    resetInput();
    navigate(`/project/${name}`);
  };

  useEffect(() => {
    searchUser({
      variables: { login: debouncedInput },
    });
    searchProject({
      variables: { name: debouncedInput },
    });
  }, [debouncedInput, searchUser, searchProject]);

  useEffect(() => {
    resetInput();
  }, [location.pathname]); // FIXME: resetInput을 종속성 배열에 넣으면 매 input이 변할 때마다 resetInput이 호출됨

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
  border-radius: ${({ theme }) => theme.radius.md};
  transition: all 0.5s;

  box-shadow: ${({ isFocused }) =>
    !isFocused
      ? '8px 8px 10px #eeeeee, -8px -8px 10px #ffffff'
      : '8px 8px 10px #dddddd, -8px -8px 10px #ffffff'};

  :hover {
    box-shadow: 8px 8px 10px #dddddd, -8px -8px 10px #ffffff;
  }
`;
