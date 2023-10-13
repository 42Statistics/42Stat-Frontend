import { gql } from '@shared/__generated__';
import { useLazyQuery } from '@apollo/client';
import { useDebounce } from 'usehooks-ts';
import { useEffect, useState } from 'react';
import { VStack, Writable } from '@shared/ui-kit';
import { Spotlight } from './Spotlight';
import styled from '@emotion/styled';

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
  const [isFocused, setIsFocused] = useState(false);
  const [input, setInput] = useState<string>('');
  const debouncedInput = useDebounce(input, 250);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setInput(keyword);
  };

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

  return (
    <VStack w="100%" onBlur={handleBlur}>
      <Layout isRelative={isRelative}>
        <InputLayout width={width} height={height}>
          <Writable
            name="name"
            id={index.toString()}
            value={input}
            onChange={handleInputChange}
            onFocus={() => setIsFocused(true)}
          />
          {isFocused && debouncedInput.length >= 2 && (
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

const Layout = styled.div<LayoutProps>`
  display: flex;
  justify-content: center;
  position: ${({ isRelative }) => (isRelative ? 'relative' : 'auto')};
  width: 100%;
  height: 100%;
`;

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

type LayoutProps = {
  isRelative?: boolean;
};

type InputLayoutProps = {
  width: string;
  height: string;
};

type ProjectSpotlightProps = {
  index: number;
  keyword: string;
  width?: string;
  height?: string;
  isRelative?: boolean;
  spotlightWidth?: string;
  spotlightLeft?: string;
};
