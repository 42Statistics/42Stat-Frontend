import { useLazyQuery } from '@apollo/client';
import ft_logo from '@assets/42-logo.svg';
import {
  Avatar,
  BoldText,
  Clickable,
  Divider,
  HStack,
  Image,
  Input,
  Text,
  VStack,
} from '@components/common';
import styled from '@emotion/styled';
import { MdSearch } from '@react-icons/all-files/md/MdSearch';
import { isDefined } from '@utils/isDefined';
import { isEnterKeyReleased } from '@utils/isEnterKeyReleased';
import { useDebounce } from '@utils/useDebounce';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FIND_PROJECT_PREVIEW, FIND_USER_PREVIEW } from './common';

// TODO: SearchBar 추상화
export const AboveTabletUserSearchBar = () => {
  const [input, setInput] = useState<string>('');
  const [isFocused, setIsFocused] = useState<boolean>(false);
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

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isEnterKeyReleased(e)) return;
    userData &&
      handleUserSubmit(userData.findUserPreview.filter(isDefined)[0].login);
  };

  const handleUserSubmit = (name: string) => {
    if (inputRef?.current) {
      inputRef.current.value = '';
    }
    setInput('');
    navigate('/profile/' + name);
  };

  const handleProjectSubmit = (name: string) => {
    if (inputRef?.current) {
      inputRef.current.value = '';
    }
    setInput('');
    navigate('/project/' + name);
  };

  return (
    <AboveTabletUserSearchBarLayout isFocused={isFocused}>
      <HStack spacing="2rem">
        <MdSearch id="search-icon" size="24px" />
        <Input
          ref={inputRef}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Search..."
        />
      </HStack>
      {isPreviewDisplaying && (
        <UserSearchResult>
          <VStack spacing="3rem">
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
                  .map((project, idx) => (
                    <Clickable
                      key={idx}
                      onClick={() => handleProjectSubmit(project.name)}
                      element={
                        <HStack spacing="1rem">
                          <Image src={ft_logo} width="16px" />
                          <Text>{project.name}</Text>
                        </HStack>
                      }
                    />
                  ))}
              </VStack>
            )}
          </VStack>
        </UserSearchResult>
      )}
    </AboveTabletUserSearchBarLayout>
  );
};

export const AboveTabletUserSearchBarLayout = styled.div<{
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

const UserSearchResult = styled.div`
  position: absolute;
  top: 6rem;
  left: 0;
  width: 30rem;
  padding: 2.5rem;
  border-radius: 2rem;
  box-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
  background-color: ${({ theme }) => theme.colors.mono.white};
  z-index: ${({ theme }) => theme.zIndex.searchResult};
`;
