import { gql } from '@shared/__generated__';
import { useLazyQuery } from '@apollo/client';
import { useDebounce } from 'usehooks-ts';
import { useEffect, useState } from 'react';
import { VStack, TableInput } from '@shared/ui-kit';
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

export const ProjectSpotlight = ({ index, keyword }: ProjectSpotlightProps) => {
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
    <VStack onBlur={handleBlur}>
      <Layout>
        <TableInput
          name="name"
          id={index.toString()}
          value={input}
          onChange={handleInputChange}
          onFocus={() => setIsFocused(true)}
          style={{ width: '10rem' }}
        />
        {isFocused && debouncedInput.length >= 2 && (
          <Spotlight index={index} result={searchResult} />
        )}
      </Layout>
    </VStack>
  );
};

const Layout = styled.div`
  position: absolute;
`;

type ProjectSpotlightProps = {
  index: number;
  keyword: string;
};
