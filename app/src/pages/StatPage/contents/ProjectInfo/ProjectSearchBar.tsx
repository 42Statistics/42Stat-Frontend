import { gql } from '@/__generated__';
import { Clickable, HStack, Input, Text, VStack } from '@/components/common';
import { isDefined } from '@/utils/isDefined';
import { isEnterKeyReleased } from '@/utils/isEnterKeyReleased';
import { useDebounce } from '@/utils/useDebounce';
import { useLazyQuery } from '@apollo/client';
import styled from '@emotion/styled';
import { BiSearch } from '@react-icons/all-files/bi/BiSearch';
import { useEffect, useRef, useState } from 'react';

const FIND_PROJECT_PREVIEW = gql(/* GraphQL */ `
  query FindProjectPreview($name: String!) {
    findProjectPreview(name: $name) {
      id
      name
      url
    }
  }
`);

type ProjectSearchBarProps = {
  onSubmit: (projectName: string) => void;
};

// TODO: Input 로직은 분리할 수 있을 것 같은데...
export const ProjectSearchBar = ({ onSubmit }: ProjectSearchBarProps) => {
  const [input, setInput] = useState<string>('');
  const debouncedInput = useDebounce(input, 100);
  const [preview, { loading, error, data }] =
    useLazyQuery(FIND_PROJECT_PREVIEW);
  const isPreviewDisplaying =
    (debouncedInput !== '' &&
      data?.findProjectPreview.length !== 0 &&
      !loading) ||
    error;
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    preview({
      variables: { name: debouncedInput },
    });
  }, [debouncedInput]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isEnterKeyReleased(e)) return;
    handleSubmit(input);
  };

  const handleSubmit = (projectName: string) => {
    if (inputRef != null && inputRef.current != null) {
      inputRef.current.value = '';
    }
    setInput('');
    onSubmit(projectName);
  };

  return (
    <div css={{ position: 'relative' }}>
      <ProjectSearchBarLayout>
        <VStack>
          <HStack w="100%" spacing="1rem">
            <Input
              ref={inputRef}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <Clickable
              onClick={() => handleSubmit(input)}
              element={<BiSearch />}
            />
          </HStack>
        </VStack>
      </ProjectSearchBarLayout>
      {isPreviewDisplaying && (
        <ProjectSearchResult>
          <VStack w="100%" align="start" spacing="1rem">
            {error && <Text>Error! {error.message}</Text>}
            {data?.findProjectPreview
              .slice(0, 5)
              .filter(isDefined)
              .map((project, idx) => (
                <Clickable
                  key={idx}
                  onClick={() => handleSubmit(project.name)}
                  element={<Text>{project.name}</Text>}
                />
              ))}
          </VStack>
        </ProjectSearchResult>
      )}
    </div>
  );
};

const ProjectSearchBarLayout = styled.div`
  padding: 1.5rem 2rem 1.5rem 4rem;
  width: 30rem;
  border-radius: 3rem;
  background-color: ${({ theme }) => theme.colors.primary.light};
`;

const ProjectSearchResult = styled.div`
  position: absolute;
  top: 6rem;
  left: 0;
  z-index: 10;
  width: 30rem;
  padding: 1.5rem 4rem;
  border-radius: 3rem;
  box-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
  background-color: ${({ theme }) => theme.colors.primary.light};
`;
