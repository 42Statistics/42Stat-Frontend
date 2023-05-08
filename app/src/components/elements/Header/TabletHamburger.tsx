import { Clickable } from '@/components/common';
import { isNavBarOpenAtom } from '@/utils/atoms/isNavBarOpenAtom';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { GiHamburgerMenu } from '@react-icons/all-files/gi/GiHamburgerMenu';
import { useSetAtom } from 'jotai';

export const TabletHamburger = () => {
  const setIsNavBarOpen = useSetAtom(isNavBarOpenAtom);
  const theme = useTheme();

  return (
    <Clickable
      onClick={() => setIsNavBarOpen((cur) => !cur)}
      element={
        <TabletHamburgerLayout>
          <GiHamburgerMenu color={theme.colors.mono.white} size="20px" />{' '}
        </TabletHamburgerLayout>
      }
    />
  );
};

const TabletHamburgerLayout = styled.header`
  position: fixed;
  bottom: 3.5rem;
  left: 2.5rem;
  border-radius: 999px;
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.colors.primary.default};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  z-index: 100;
  cursor: pointer;
`;
