import { AppLogoTitleButton } from '@/components/elements/AppLogoTitleButton';
import { DesktopNavMenu } from '../Desktop/DesktopNavMenu';
import { VStack } from '@/styles/components';
import styled from '@emotion/styled';
import { useSessionStore } from '@/utils/stores/useSessionStore';
import { useEffect } from 'react';
import { Overlay } from '@/components/elements/Overlay';

export const TabletNavBar = () => {
  const { isNavBarOpen, setIsNavBarOpen, toggleIsNavBarOpen } =
    useSessionStore();

  useEffect(() => setIsNavBarOpen(false), [setIsNavBarOpen]);

  return (
    <>
      {isNavBarOpen && <Overlay onClick={toggleIsNavBarOpen} />}
      <TabletNavBarLayout isOpen={isNavBarOpen}>
        <VStack h="100%" spacing="6rem">
          <AppLogoTitleButton />
          <p>박용준</p>
          <DesktopNavMenu />
        </VStack>
      </TabletNavBarLayout>
    </>
  );
};

type TabletNavBarLayoutProps = {
  isOpen: boolean;
};

const TabletNavBarLayout = styled.nav<TabletNavBarLayoutProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 24rem;
  height: 100%;
  padding: 3rem;
  background-color: ${({ theme }) => theme.colors.mono.white};
  border-right: 0.1rem solid ${({ theme }) => theme.colors.mono.gray.light};
  transform: ${({ isOpen }) => !isOpen && 'translateX(-100%)'};
  transition: all 0.3s;
  z-index: 3;
`;
