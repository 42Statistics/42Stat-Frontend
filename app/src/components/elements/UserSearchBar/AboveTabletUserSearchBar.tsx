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
} from '@/components/common';
import { isDefined } from '@/utils/isDefined';
import { isEnterKeyReleased } from '@/utils/isEnterKeyReleased';
import { useDebounce } from '@/utils/useDebounce';
import { useLazyQuery } from '@apollo/client';
import styled from '@emotion/styled';
import { MdSearch } from '@react-icons/all-files/md/MdSearch';
import { rgba } from 'emotion-rgba';
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
  const isPreviewDisplaying =
    debouncedInput !== '' &&
    (userData?.findUserPreview.length !== 0 ||
      projectData?.findProjectPreview.length !== 0);
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
    handleUserSubmit(input);
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
            <VStack w="100%" align="start" spacing="1rem">
              <BoldText>유저</BoldText>
              <Divider />
              {/* {error && <Text>Error! {error.message}</Text>} */}
              {userData?.findUserPreview
                .slice(0, 5)
                .filter(isDefined)
                .map((user) => (
                  <Clickable
                    key={user.id}
                    onClick={() => handleUserSubmit(user.login)}
                    element={
                      <HStack spacing="1rem">
                        <Avatar size="1.6rem" />
                        <Text>{user.login}</Text>
                      </HStack>
                    }
                  />
                ))}
            </VStack>
            <VStack w="100%" align="start" spacing="1rem">
              <BoldText>프로젝트</BoldText>
              <Divider />
              {projectData?.findProjectPreview
                .slice(0, 5)
                .filter(isDefined)
                .map((project, idx) => (
                  <Clickable
                    key={idx}
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
  transition: all 0.2s;

  box-shadow: ${({ theme, isFocused }) =>
    isFocused
      ? `0 0.4rem 0.4rem ${rgba(theme.colors.mono.black, 0.25)}`
      : `0 0.4rem 0.4rem ${rgba(theme.colors.mono.black, 0.1)}`};

  &:hover {
    box-shadow: ${({ theme }) =>
      `0 0.4rem 0.4rem ${rgba(theme.colors.mono.black, 0.25)}`};
  }
`;

const UserSearchResult = styled.div`
  position: absolute;
  top: 6rem;
  left: 0;
  z-index: 100;
  width: 30rem;
  padding: 1.5rem 4rem;
  border-radius: 3rem;
  box-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
  background-color: ${({ theme }) => theme.colors.mono.white};
`;
