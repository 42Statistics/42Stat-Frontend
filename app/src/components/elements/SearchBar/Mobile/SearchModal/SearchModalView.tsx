import { Clickable, HStack } from '@components/common';
import styled from '@emotion/styled';
import { MdArrowBack } from '@react-icons/all-files/md/MdArrowBack';
import { MdSearch } from '@react-icons/all-files/md/MdSearch';
import { ROUTES } from '@routes/ROUTES';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSearchBar } from '../../hooks/useSearchBar';
import { MobileSearchResult } from '../MobileSearchResult';
import { MobileSearchInput } from './MobileSearchInput';

type SearchModalViewProps = {
  onClose: () => void;
};

export const SearchModalView = ({ onClose }: SearchModalViewProps) => {
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

  const navigate = useNavigate();
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

  const handleUserSubmit = (name: string) => {
    onClose();
    resetInput();
    navigate(`${ROUTES.PROFILE_ROOT}/${name}`);
  };

  const handleProjectSubmit = (name: string) => {
    onClose();
    resetInput();
    navigate(`${ROUTES.PROJECT_ROOT}/${name}`);
  };

  const handleClickSearchButton = () => {
    onClose();
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
      <HStack w="100%" spacing="2rem">
        <Clickable onClick={onClose}>
          <MdArrowBack size="24px" />
        </Clickable>
        <MobileSearchInput
          inputRef={inputRef}
          onChange={(e) => setInput(e.target.value)}
        />
        <Clickable onClick={handleClickSearchButton}>
          <MdSearch size="24px" />
        </Clickable>
      </HStack>
      <MobileSearchResult
        users={users}
        projects={projects}
        onUserSubmit={handleUserSubmit}
        onProjectSubmit={handleProjectSubmit}
        isPreviewDisplaying={isPreviewDisplaying}
      />
    </Layout>
  );
};

const Layout = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  width: 100vw;
  height: 100vh;
  padding: 3rem;
  background-color: ${({ theme }) => theme.colors.mono.white};
`;
