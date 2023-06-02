import { Modal, Spacer, Text, VStack } from '@components/common';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { ModalType } from '@utils/types/Modal';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MobileSearchInput } from './MobileSearchInput';
import { MobileSearchResult } from './MobileSearchResult';
import { useSearchBar } from './hooks';

export const SearchModal = ({ isOpen, toggle }: ModalType) => {
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
    toggle();
    resetInput();
    navigate(`/profile/${name}`);
  };

  const handleProjectSubmit = (name: string) => {
    toggle();
    resetInput();
    navigate(`/project/${name}`);
  };

  const handleClickSearchBtn = () => {
    toggle();
    if (users.length === 0) {
      if (projects.length === 0) {
        return;
      }
      handleProjectSubmit(projects[0].name);
    }
    handleUserSubmit(users[0].login);
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <SearchModalLayout>
        <MobileSearchInput
          inputRef={inputRef}
          setInput={setInput}
          toggle={toggle}
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
