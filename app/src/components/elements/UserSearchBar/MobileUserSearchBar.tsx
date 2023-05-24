import {
  Avatar,
  BoldText,
  Clickable,
  Divider,
  HStack,
  Image,
  Input,
  Spacer,
  Text,
  VStack,
} from '@/components/common';
import { isDefined } from '@/utils/isDefined';
import { useDebounce } from '@/utils/useDebounce';
import { useLazyQuery } from '@apollo/client';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { MdArrowBack } from '@react-icons/all-files/md/MdArrowBack';
import { MdSearch } from '@react-icons/all-files/md/MdSearch';
import { rgba } from 'emotion-rgba';
import { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import { FIND_PROJECT_PREVIEW, FIND_USER_PREVIEW } from './common';

// TODO: SearchBar 추상화
export const MobileUserSearchBar = () => {
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
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState<boolean>(false);

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
    setIsOpen(false);
    setInput('');
    navigate('/profile/' + name);
  };

  const handleProjectSubmit = (name: string) => {
    if (inputRef?.current) {
      inputRef.current.value = '';
    }
    setIsOpen(false);
    setInput('');
    navigate('/project/' + name);
  };

  return (
    <>
      <Clickable
        onClick={() => setIsOpen(true)}
        element={
          <MobileUserSearchBarLayout>
            <HStack spacing="2rem">
              <MdSearch id="search-icon" size="24px" />
              <Text color={theme.colors.mono.gray300} css={{ width: '12rem' }}>
                Search...
              </Text>
            </HStack>
          </MobileUserSearchBarLayout>
        }
      />
      <SearchModal isOpen={isOpen}>
        <>
          <Helmet>
            <meta name="theme-color" content={theme.colors.mono.white} />
          </Helmet>
          <VStack w="100%" align="start" spacing="4rem">
            <HStack w="100%" spacing="2rem">
              <Clickable
                onClick={() => setIsOpen(false)}
                element={<MdArrowBack size="24px" />}
              />
              <Input
                ref={inputRef}
                onChange={(e) => setInput(e.target.value)}
                placeholder="유저명 또는 프로젝트명 검색"
                css={{
                  fontSize: '1.6rem', // 웹 접근성을 위해 Safari에서는 input font-size가 16px 미만이면 줌이 되어버림.
                }}
              />
              <Spacer />
              <MdSearch size="24px" />
            </HStack>
            {isPreviewDisplaying ? (
              <VStack w="100%" spacing="4rem">
                {hasUserData && (
                  <VStack w="100%" align="start" spacing="1rem">
                    <BoldText>유저</BoldText>
                    <Divider />
                    {userData.findUserPreview
                      .slice(0, 5)
                      .filter(isDefined)
                      .map((user) => (
                        <Clickable
                          key={user.id}
                          onClick={() => handleUserSubmit(user.login)}
                          element={
                            <HStack spacing="1rem">
                              <Avatar size="1.6rem" imgUrl={user.imgUrl} />
                              <Text>{user.login}</Text>
                            </HStack>
                          }
                        />
                      ))}
                  </VStack>
                )}
                {hasProjectData && (
                  <VStack w="100%" align="start" spacing="1rem">
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
                              <Image src="/42-logo.png" width="16px" />
                              <Text>{project.name}</Text>
                            </HStack>
                          }
                        />
                      ))}
                  </VStack>
                )}
              </VStack>
            ) : (
              <VStack w="100%" h="10rem">
                <Text color={theme.colors.mono.gray300}>
                  검색어를 입력해주세요
                </Text>
              </VStack>
            )}
          </VStack>
        </>
      </SearchModal>
    </>
  );
};

const SearchModal = styled(Modal)`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.mono.white};
  padding: 1.5rem;
`;

const MobileUserSearchBarLayout = styled.div`
  position: relative;
  padding: 1rem 2rem;
  border-radius: 2rem;
  transition: all 0.2s;
  background-color: ${({ theme }) => theme.colors.mono.white};

  box-shadow: ${({ theme }) =>
    `0 0.4rem 0.4rem ${rgba(theme.colors.mono.black, 0.1)}`};
`;
