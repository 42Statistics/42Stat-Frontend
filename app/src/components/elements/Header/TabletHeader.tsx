import { Clickable, HStack } from '@/components/common';
import { AboveTabletUserSearchBar } from '@/components/elements/UserSearchBar';
import { isNavBarOpenAtom } from '@/utils/atoms/isNavBarOpenAtom';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { useSetAtom } from 'jotai';
import { RxHamburgerMenu } from 'react-icons/rx';

export const TabletHeader = () => {
  const setIsNavBarOpen = useSetAtom(isNavBarOpenAtom);
  const theme = useTheme();

  return (
    <TabletHeaderLayout>
      <HStack spacing="2.5rem" justify="start">
        <Clickable
          onClick={() => setIsNavBarOpen((cur) => !cur)}
          element={
            <RxHamburgerMenu color={theme.colors.mono.white} size="20px" /> // FIXME: 밑으로 내려갈 때 카드와 안 겹치게
          }
        />
        <AboveTabletUserSearchBar />
      </HStack>
    </TabletHeaderLayout>
  );
};

const TabletHeaderLayout = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 8rem;
  padding: 1rem 2rem;
  z-index: 100;
`;
