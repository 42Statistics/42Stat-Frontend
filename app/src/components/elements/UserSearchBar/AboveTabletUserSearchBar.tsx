import {
  Avatar,
  Clickable,
  HStack,
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
import { FIND_PROJECT_PREVIEW } from './common';

// TODO: SearchBar 추상화
export const AboveTabletUserSearchBar = () => {
  const [input, setInput] = useState<string>('');
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const debouncedInput = useDebounce(input, 100);
  const [preview, { loading, error, data }] =
    useLazyQuery(FIND_PROJECT_PREVIEW);
  const isPreviewDisplaying =
    debouncedInput !== '' && data?.findProjectPreview.length !== 0 && !loading;
  // ) || error;
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    preview({
      variables: { name: debouncedInput },
    });
  }, [debouncedInput]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isEnterKeyReleased(e)) return;
    handleSubmit(input);
  };

  const handleSubmit = (username: string) => {
    if (inputRef != null && inputRef.current != null) {
      inputRef.current.value = '';
    }
    setInput('');
    navigate('/profile/' + username);
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
          placeholder="유저명 검색"
        />
      </HStack>
      {isPreviewDisplaying && (
        <UserSearchResult>
          <VStack w="100%" align="start" spacing="1rem">
            {/* {error && <Text>Error! {error.message}</Text>} */}
            {data?.findProjectPreview
              .slice(0, 5)
              .filter(isDefined)
              .map((project, idx) => (
                <Clickable
                  key={idx}
                  onClick={() => handleSubmit(project.name)}
                  element={
                    <HStack spacing="1rem">
                      <Avatar size="1.6rem" />
                      <Text>{project.name}</Text>
                    </HStack>
                  }
                />
              ))}
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
