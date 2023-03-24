import { AppLogoTitleButton } from '@/components/elements/AppLogoTitleButton';
import { DesktopNavMenu } from '../Desktop/DesktopNavMenu';
import { HStack, VStack } from '@/styles/components';
import styled from '@emotion/styled';
import { useSessionStore } from '@/utils/stores/useSessionStore';
import { useEffect } from 'react';
import { Button } from '../../Button';
import { CloseIconSvg } from '@/assets/icons/CloseIconSvg';

export const TabletNavBar = () => {
  const { isNavBarOpen, setIsNavBarOpen, toggleIsNavBarOpen } =
    useSessionStore();

  useEffect(() => setIsNavBarOpen(false), [setIsNavBarOpen]);

  return (
    <>
      <TabletNavBarLayout isOpen={isNavBarOpen}>
        <VStack h="100%" spacing="6rem">
          <HStack w="100%" spacing="2rem">
            <AppLogoTitleButton />
            <Button onClick={toggleIsNavBarOpen} element={<CloseIconSvg />} />
          </HStack>
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
  width: 26rem;
  height: 100%;
  padding: 3rem;
  background-color: ${({ theme }) => theme.colors.mono.white};
  border-right: 0.1rem solid ${({ theme }) => theme.colors.mono.gray.light};
  transform: ${({ isOpen }) => !isOpen && 'translateX(-100%)'};
  transition: all 0.3s;
`;
