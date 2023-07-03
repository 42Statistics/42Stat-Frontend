import { ModalType } from '@/types/Modal';
import { Modal, Spacer, Text, VStack } from '@components/common';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { ROUTES } from '@routes/ROUTES';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSearchBar } from '../hooks/useSearchBar';
import { MobileSearchInput } from './MobileSearchInput';
import { MobileSearchResult } from './MobileSearchResult';

export const SearchModal = ({ isOpen, onClose }: ModalType) => {
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

  const theme = useTheme();
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

  const handleClickSearchBtn = () => {
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
    <Modal isOpen={isOpen} onClose={onClose}>
      <SearchModalLayout>
        <MobileSearchInput
          inputRef={inputRef}
          setInput={setInput}
          onClose={onClose}
          onClickSearchBtn={handleClickSearchBtn}
        />
        {isPreviewDisplaying ? (
          <MobileSearchResult
            users={users}
            projects={projects}
            onUserSubmit={handleUserSubmit}
            onProjectSubmit={handleProjectSubmit}
          />
        ) : (
          <VStack w="100%" h="10rem">
            <Text color={theme.colors.mono.gray300}>검색어를 입력해주세요</Text>
          </VStack>
        )}
        <Spacer />
      </SearchModalLayout>
    </Modal>
  );
};

const SearchModalLayout = styled(VStack)`
  width: 100vw;
  height: 100vh;
  padding: 6rem 2rem 0 2rem;
  gap: 4rem;
`;
