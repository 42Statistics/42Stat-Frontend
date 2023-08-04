import { useLazyQuery } from '@apollo/client';
import { SpotlightFocusContext } from '@core/contexts/SpotlightFocusContext';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { gql } from '@shared/__generated__';
import { ReactComponent as MdSearch } from '@shared/assets/icon/md-search.svg';
import { useRoveFocus } from '@shared/hooks/useRoveFocus';
import { DialogBaseProps } from '@shared/types/Modal';
import { Dialog, VStack } from '@shared/ui-kit';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDebounce } from 'usehooks-ts';
import { SpotlightResult } from './SpotlightResult';
import { SpotlightSearchBar } from './SpotlightSearchBar';

export const GET_SEARCH_RESULT = gql(/* GraphQL */ `
  query GetSearchResult($input: String!, $limit: Int!) {
    getSearchResult(input: $input, limit: $limit) {
      userPreviews {
        ...userPreviewFields
      }
      projectPreviews {
        ...projectPreviewFields
      }
    }
  }
`);

type SpotlightProps = DialogBaseProps;

export const Spotlight = ({ isOpen, onClose }: SpotlightProps) => {
  const theme = useTheme();
  const [input, setInput] = useState<string>('');
  const debouncedInput = useDebounce(input, 250);
  const [search, searchResult] = useLazyQuery(GET_SEARCH_RESULT);
  const size =
    (searchResult.data?.getSearchResult.userPreviews.length ?? 0) +
    (searchResult.data?.getSearchResult.projectPreviews.length ?? 0);
  const { currentFocus, setCurrentFocus } = useRoveFocus(size);
  const LIMIT = 4;
  const location = useLocation();

  // 페이지 이동 감지
  useEffect(() => {
    setInput('');
    onClose();
    setCurrentFocus(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  useEffect(() => {
    setCurrentFocus(0);
    if (debouncedInput.length >= 2) {
      return;
    }
    if (searchResult.data) {
      searchResult.data = undefined;
    }
  }, [debouncedInput, setCurrentFocus, searchResult]);

  useEffect(() => {
    if (debouncedInput.length < 2) {
      return;
    }
    if (debouncedInput.length <= 100) {
      search({ variables: { input: debouncedInput, limit: LIMIT } });
    }
  }, [debouncedInput, search]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <SpotlightFocusContext.Provider value={{ currentFocus, setCurrentFocus }}>
      <Dialog isOpen={isOpen} onClose={onClose} position="top">
        <Layout>
          <VStack w="100%" h="100%" spacing="2rem">
            <SpotlightSearchBar
              left={
                <MdSearch
                  width={36}
                  height={36}
                  fill={theme.colors.mono.gray300}
                />
              }
              input={input}
              onChange={handleChange}
            />
            {debouncedInput.length >= 2 ? (
              <SpotlightResult result={searchResult} />
            ) : null}
          </VStack>
        </Layout>
      </Dialog>
    </SpotlightFocusContext.Provider>
  );
};

const Layout = styled.div`
  width: 70rem;
  max-width: calc(100vw - 4rem);
`;
