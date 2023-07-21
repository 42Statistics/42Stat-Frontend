import { gql } from '@/__generated__';
import { useRoveFocus } from '@/hooks/useRoveFocus';
import { DialogBaseProps } from '@/types/Modal';
import { useLazyQuery } from '@apollo/client';
import { VStack } from '@components/common';
import { Dialog } from '@components/common/Dialog';
import styled from '@emotion/styled';
import { RiSearchLine } from '@react-icons/all-files/ri/RiSearchLine';
import { SpotlightFocusContext } from '@utils/contexts/SpotlightFocusContext';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDebounce } from 'usehooks-ts';
import { SpotlightResult } from './SpotlightResult';
import { SpotlightSearchBar } from './SpotlightSearchBar';

export const FIND_USER_PREVIEW = gql(/* GraphQL */ `
  query FindUserPreview($login: String!, $limit: Int!) {
    findUserPreview(login: $login, limit: $limit) {
      id
      login
      imgUrl
    }
  }
`);

export const FIND_PROJECT_PREVIEW = gql(/* GraphQL */ `
  query FindProjectPreview($name: String!, $limit: Int!) {
    findProjectPreview(name: $name, limit: $limit) {
      id
      name
      url
    }
  }
`);

type SpotlightProps = DialogBaseProps;

export const Spotlight = ({ isOpen, onClose }: SpotlightProps) => {
  const [input, setInput] = useState<string>('');
  const debouncedInput = useDebounce(input, 250);
  const [findUser, findUserResult] = useLazyQuery(FIND_USER_PREVIEW);
  const [findProject, findProjectResult] = useLazyQuery(FIND_PROJECT_PREVIEW);
  const size =
    1 +
    (findUserResult.data?.findUserPreview.length ?? 0) +
    (findProjectResult.data?.findProjectPreview.length ?? 0);
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
    if (debouncedInput.length < 2) {
      return;
    }
    findUser({ variables: { login: debouncedInput, limit: LIMIT } });
    findProject({ variables: { name: debouncedInput, limit: LIMIT } });
  }, [debouncedInput, findUser, findProject]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <SpotlightFocusContext.Provider value={{ currentFocus, setCurrentFocus }}>
      <Dialog isOpen={isOpen} onClose={onClose} position="top">
        <Layout>
          <VStack w="100%" h="100%" spacing="2rem">
            <SpotlightSearchBar
              left={<RiSearchLine size={32} />}
              input={input}
              onChange={handleChange}
            />
            {input.length >= 2 && (
              <SpotlightResult
                findUserResult={findUserResult}
                findProjectResult={findProjectResult}
              />
            )}
          </VStack>
        </Layout>
      </Dialog>
    </SpotlightFocusContext.Provider>
  );
};

const Layout = styled.div`
  width: 70rem;
  max-width: calc(100vw - 2rem);
`;
