import { useLazyQuery } from '@apollo/client';
import styled from '@emotion/styled';
import { useEffect, useState, useRef } from 'react';
import { useDebounce } from 'usehooks-ts';
import { useAtom } from 'jotai';

import { isProjectSpotlightOpenAtom } from '@/Calculator/atoms/isProjectSpotlightOpenAtom';
import { gql } from '@shared/__generated__';
import { VStack, Writable } from '@shared/ui-kit';
import { isEscapeKeyDown } from '@shared/utils/keyboard';

import { Spotlight } from './Spotlight';

export const GET_PROJECTS = gql(/* GraphQL */ `
  query GetProjects($input: String!, $limit: Int!) {
    getSpotlight(input: $input, limit: $limit) {
      projectPreviews {
        id
        name
        difficulty
      }
    }
  }
`);

type ProjectSpotlightProps = {
  index: number;
  keyword: string;
  width?: string;
  height?: string;
  isRelative?: boolean;
  spotlightWidth?: string;
  spotlightLeft?: string;
};

export const ProjectSpotlight = ({
  index,
  keyword,
  spotlightLeft = '0',
  width = '100%',
  height = '100%',
  isRelative = false,
  spotlightWidth = '100%',
}: ProjectSpotlightProps) => {
  const [search, searchResult] = useLazyQuery(GET_PROJECTS);
  const LIMIT = 4;
  const [isProjectSpotlightOpen, setIsProjectSpotlightOpen] = useAtom(
    isProjectSpotlightOpenAtom,
  );
  const inputRef = useRef<HTMLInputElement>(null);
  const [input, setInput] = useState<string>('');
  const debouncedInput = useDebounce(input, 250);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    if (isProjectSpotlightOpen !== index) setIsProjectSpotlightOpen(index);
  };

  const handleBlur = () => {
    setIsProjectSpotlightOpen(-1);
    setInput(keyword);
  };

  useEffect(() => {
    if (isProjectSpotlightOpen === index) {
      inputRef.current?.focus();
      return;
    }
    inputRef.current?.blur();
  }, [isProjectSpotlightOpen, index]);

  useEffect(() => {
    setInput(keyword);
  }, [keyword]);

  useEffect(() => {
    if (debouncedInput.length >= 2) {
      return;
    }
    if (searchResult.data) {
      searchResult.data = undefined;
    }
  }, [debouncedInput, searchResult]);

  useEffect(() => {
    if (debouncedInput.length < 2) {
      return;
    }
    if (debouncedInput.length <= 100) {
      search({ variables: { input: debouncedInput, limit: LIMIT } });
    }
  }, [debouncedInput, search]);

  useEffect(() => {
    const handleEscapeKeyDown = (e: KeyboardEvent) => {
      if (isEscapeKeyDown(e) && isProjectSpotlightOpen === index) {
        e.preventDefault();
        setIsProjectSpotlightOpen(-1);
      }
    };
    document.addEventListener('keydown', handleEscapeKeyDown);

    return () => {
      document.removeEventListener('keydown', handleEscapeKeyDown);
    };
  });

  return (
    <VStack w="100%" onBlur={handleBlur}>
      <Layout isRelative={isRelative}>
        <InputLayout width={width} height={height}>
          <Writable
            name="name"
            id={index.toString()}
            value={input}
            onChange={handleInputChange}
            onFocus={() => setIsProjectSpotlightOpen(index)}
            ref={inputRef}
          />
          {isProjectSpotlightOpen === index && debouncedInput.length >= 2 && (
            <Spotlight
              left={spotlightLeft}
              width={spotlightWidth}
              index={index}
              result={searchResult}
            />
          )}
        </InputLayout>
      </Layout>
    </VStack>
  );
};

type LayoutProps = {
  isRelative?: boolean;
};

const Layout = styled.div<LayoutProps>`
  display: flex;
  justify-content: center;
  position: ${({ isRelative }) => (isRelative ? 'relative' : 'auto')};
  width: 100%;
  height: 100%;
`;

type InputLayoutProps = {
  width: string;
  height: string;
};

const InputLayout = styled.div<InputLayoutProps>`
  display: flex;
  align-items: center;
  padding: 1rem;
  margin: 0.2rem;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: ${({ theme }) => theme.radius.xs};
  transition: all 0.2s;
  border: 1px solid ${({ theme }) => theme.colors.mono.gray200};

  &:hover {
    border-color: ${({ theme }) => theme.colors.mono.gray300};
  }
  background: ${({ theme }) => theme.colors.background.box.default};
`;
