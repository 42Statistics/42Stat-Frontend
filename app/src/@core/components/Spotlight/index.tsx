import { useLazyQuery } from '@apollo/client';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { useSetAtom } from 'jotai';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDebounce } from 'usehooks-ts';

import { isSpotlightOpenAtom } from '@core/atoms/isSpotlightOpenAtom';
import { SpotlightResult } from '@core/components/Spotlight/SpotlightResult';
import { SpotlightSearchBar } from '@core/components/Spotlight/SpotlightSearchBar';
import { SpotlightFocusContext } from '@core/contexts/SpotlightFocusContext';
import { gql } from '@shared/__generated__';
import { ReactComponent as MdSearch } from '@shared/assets/icon/md-search.svg';
import { useRoveFocus } from '@shared/hooks/useRoveFocus';
import { Dialog, VStack } from '@shared/ui-kit';
import { useDeviceType } from '@shared/utils/react-responsive/useDeviceType';

export const GET_SPOTLIGHT = gql(/* GraphQL */ `
  query GetSpotlight($input: String!, $limit: Int!) {
    getSpotlight(input: $input, limit: $limit) {
      userPreviews {
        ...userPreviewFields
      }
      projectPreviews {
        ...projectPreviewFields
      }
    }
  }
`);

export const Spotlight = () => {
  const theme = useTheme();
  const location = useLocation();
  const device = useDeviceType();
  const LIMIT = 4;
  const [isMounted, setIsMounted] = useState(false);
  const [input, setInput] = useState<string>('');
  const debouncedInput = useDebounce(input, 50);
  const [search, searchResult] = useLazyQuery(GET_SPOTLIGHT);
  const size =
    (searchResult.data?.getSpotlight.userPreviews.length ?? 0) +
    (searchResult.data?.getSpotlight.projectPreviews.length ?? 0);
  const { currentFocus, setCurrentFocus } = useRoveFocus(size);
  const setIsSpotlightOpen = useSetAtom(isSpotlightOpenAtom);

  const closeSpotlight = () => {
    setIsSpotlightOpen(false);
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // 페이지 이동 감지
  useEffect(() => {
    if (!isMounted) {
      return;
    }
    setInput('');
    closeSpotlight();
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
    const trimmedDebouncedInput = debouncedInput.trim();
    if (
      trimmedDebouncedInput.length < 2 ||
      trimmedDebouncedInput.length > 100
    ) {
      return;
    }
    search({ variables: { input: trimmedDebouncedInput, limit: LIMIT } });
  }, [debouncedInput, search]);

  return (
    <SpotlightFocusContext.Provider value={{ currentFocus, setCurrentFocus }}>
      <Dialog isOpen onClose={closeSpotlight} position="top">
        <Layout>
          <VStack w="100%" h="100%" spacing="2rem">
            <SpotlightSearchBar
              left={
                device !== 'mobile' ? (
                  <MdSearch
                    width={36}
                    height={36}
                    fill={theme.colors.mono.gray500}
                  />
                ) : (
                  <></>
                )
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
