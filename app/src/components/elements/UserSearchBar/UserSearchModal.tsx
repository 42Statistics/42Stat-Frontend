import { useLazyQuery } from '@apollo/client';
import ft_logo from '@assets/42-logo.svg';
import {
  Avatar,
  BoldText,
  Clickable,
  Divider,
  H3BoldText,
  H3Text,
  HStack,
  Image,
  Input,
  Modal,
  Spacer,
  Text,
  VStack,
} from '@components/common';
import { useTheme } from '@emotion/react';
import { MdArrowBack } from '@react-icons/all-files/md/MdArrowBack';
import { MdSearch } from '@react-icons/all-files/md/MdSearch';
import { isDefined } from '@utils/isDefined';
import { ModalType } from '@utils/types/Modal';
import { useDebounce } from '@utils/useDebounce';
import { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { FIND_PROJECT_PREVIEW, FIND_USER_PREVIEW } from './common';

export const UserSearchModal = ({ isOpen, toggle }: ModalType) => {
  const theme = useTheme();
  const [input, setInput] = useState<string>('');
  const debouncedInput = useDebounce(input, 100);
  const [
    searchUser,
    { loading: userLoading, error: userError, data: userData },
  ] = useLazyQuery(FIND_USER_PREVIEW);
  const [
    searchProject,
    { loading: projectLoading, error: projectEror, data: projectData },
  ] = useLazyQuery(FIND_PROJECT_PREVIEW);

  const hasUserData = userData && userData.findUserPreview.length !== 0;
  const hasProjectData =
    projectData && projectData.findProjectPreview.length !== 0;
  const isPreviewDisplaying =
    debouncedInput !== '' && (hasUserData || hasProjectData);

  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    searchUser({
      variables: { login: debouncedInput },
    });
    searchProject({
      variables: { name: debouncedInput },
    });
  }, [debouncedInput, searchUser, searchProject]);

  const handleUserSubmit = (name: string) => {
    if (inputRef?.current) {
      inputRef.current.value = '';
    }
    toggle();
    setInput('');
    navigate('/profile/' + name);
  };

  const handleProjectSubmit = (name: string) => {
    if (inputRef?.current) {
      inputRef.current.value = '';
    }
    toggle();
    setInput('');
    navigate('/project/' + name);
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <Helmet>
        <meta name="theme-color" content={theme.colors.mono.white} />
      </Helmet>
      <VStack
        w="100vw"
        h="100vh"
        spacing="4rem"
        style={{
          padding: '4rem',
        }}
      >
        <HStack w="100%" spacing="2rem">
          <Clickable onClick={toggle} element={<MdArrowBack size="24px" />} />
          <Input
            ref={inputRef}
            onChange={(e) => setInput(e.target.value)}
            placeholder="유저명 또는 프로젝트명 검색"
            css={{
              fontSize: '1.6rem', // 웹 접근성을 위해 Safari에서는 input font-size가 16px 미만이면 줌이 되어버림.
            }}
          />
          <Spacer />
          {/* 그냥 제출시 제일 첫번째 유저 검색하도록 하는 로직 */}
          <MdSearch
            size="24px"
            onClick={() =>
              userData &&
              userData.findUserPreview[0] &&
              handleUserSubmit(userData?.findUserPreview[0]?.login)
            }
          />
        </HStack>
        {isPreviewDisplaying ? (
          <VStack w="100%" spacing="4rem">
            {hasUserData && (
              <VStack w="100%" align="start" spacing="1.4rem">
                <H3BoldText>유저</H3BoldText>
                <Divider />
                {userData.findUserPreview
                  .slice(0, 5)
                  .filter(isDefined)
                  .map((user) => (
                    <Clickable
                      key={user.id}
                      onClick={() => handleUserSubmit(user.login)}
                      element={
                        <HStack spacing="1.4rem">
                          <Avatar size="2rem" imgUrl={user.imgUrl} />
                          <H3Text>{user.login}</H3Text>
                        </HStack>
                      }
                    />
                  ))}
              </VStack>
            )}
            {hasProjectData && (
              <VStack w="100%" align="start" spacing="1.4rem">
                <BoldText>프로젝트</BoldText>
                <Divider />
                {projectData.findProjectPreview
                  .slice(0, 5)
                  .filter(isDefined)
                  .map((project) => (
                    <Clickable
                      key={project.id}
                      onClick={() => handleProjectSubmit(project.name)}
                      element={
                        <HStack spacing="1rem">
                          <Image src={ft_logo} width="20px" />
                          <H3Text>{project.name}</H3Text>
                        </HStack>
                      }
                    />
                  ))}
              </VStack>
            )}
          </VStack>
        ) : (
          <VStack w="100%" h="10rem">
            <Text color={theme.colors.mono.gray300}>검색어를 입력해주세요</Text>
          </VStack>
        )}
        <Spacer />
      </VStack>
    </Modal>
  );
};