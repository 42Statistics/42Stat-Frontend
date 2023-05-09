import { Avatar, Clickable, Overlay, VStack } from '@/components/common';
import { isNavBarOpenAtom } from '@/utils/atoms/isNavBarOpenAtom';
import { userAtom } from '@/utils/atoms/userAtom';
import styled from '@emotion/styled';
import { GiHamburgerMenu } from '@react-icons/all-files/gi/GiHamburgerMenu';
import { useAtom, useAtomValue } from 'jotai';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { DesktopNavBarLayout } from './DesktopNavBar';
import { NavBar } from './NavBar';
import { TabletNavMenu } from './TabletNavMenu';

export const TabletNavBar = () => {
  const location = useLocation();
  const user = useAtomValue(userAtom);
  const [isNavBarOpen, setIsNavBarOpen] = useAtom(isNavBarOpenAtom);

  useEffect(() => {
    setIsNavBarOpen(false);
    return () => setIsNavBarOpen(false);
  }, [location.pathname, setIsNavBarOpen]);

  return (
    <>
      <TabletNavBarLayout>
        <VStack w="100%" h="100%" spacing="7rem">
          <Clickable
            onClick={() => setIsNavBarOpen((cur) => !cur)}
            element={<GiHamburgerMenu size="18px" />}
          />
          <Avatar imgUrl={user.imgUrl} />
          <TabletNavMenu />
        </VStack>
      </TabletNavBarLayout>
      {isNavBarOpen && (
        <Overlay onClick={() => setIsNavBarOpen((cur) => !cur)} />
      )}
      <OpenDesktopNavBarLayout isOpen={isNavBarOpen}>
        <NavBar />
      </OpenDesktopNavBarLayout>
    </>
  );
};

const TabletNavBarLayout = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 7rem;
  height: 100%;
  padding: 3rem 1rem;
  background-color: ${({ theme }) => theme.colors.mono.white};
  box-shadow: ${({ theme }) =>
    `0.1rem 0 0.3rem 0 ${theme.colors.mono.gray100}`};
  z-index: 100;
`;

const OpenDesktopNavBarLayout = styled(DesktopNavBarLayout)<{
  isOpen: boolean;
}>`
  transform: ${({ isOpen }) => !isOpen && 'translateX(-100%)'};
  transition: all 0.5s;
  z-index: 200;
`;
