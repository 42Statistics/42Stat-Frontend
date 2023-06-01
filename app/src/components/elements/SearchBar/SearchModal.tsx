import { Modal, Spacer, Text, VStack } from '@components/common';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { ModalType } from '@utils/types/Modal';
import { useEffect } from 'react';
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
    handleUserSubmit,
    handleProjectSubmit,
  } = useSearchBar();

  const theme = useTheme();
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

  const handleUserSubmitWithToggle = (name: string) => {
    toggle();
    handleUserSubmit(name);
  };

  const handleProjectSubmitWithToggle = (name: string) => {
    toggle();
    handleProjectSubmit(name);
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
            onUserSubmit={handleUserSubmitWithToggle}
            onProjectSubmit={handleProjectSubmitWithToggle}
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
  padding: 4rem;
  gap: 4rem;
`;
