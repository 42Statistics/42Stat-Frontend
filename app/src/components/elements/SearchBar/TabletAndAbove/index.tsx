import styled from '@emotion/styled';
import { ROUTES } from '@routes/ROUTES';
import { isEnterKeyReleased } from '@utils/isEnterKeyReleased';
import { useEffect } from 'react';
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

  const location = useLocation();
  const navigate = useNavigate();
  const isPreviewDisplaying =
    debouncedInput !== '' && (!!users.length || !!projects.length);

  const handleUserSubmit = (name: string) => {
    resetInput();
    navigate(`${ROUTES.PROFILE_ROOT}/${name}`);
  };

  const handleProjectSubmit = (name: string) => {
    resetInput();
    navigate(`${ROUTES.PROJECT_ROOT}/${name}`);
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
    <Layout>
      <TabletAndAboveSearchInput
        inputRef={inputRef}
        setInput={setInput}
        onKeyDown={handleKeyDown}
      />
      {isPreviewDisplaying && (
        <TabletAndAboveSearchResult
          users={users}
          onUserSubmit={handleUserSubmit}
          projects={projects}
          onProjectSubmit={handleProjectSubmit}
        />
      )}
    </Layout>
  );
};

const Layout = styled.div`
  position: relative;
`;
