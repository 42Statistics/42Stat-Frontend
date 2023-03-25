import { AppLogoTitleButton } from '@/components/elements/AppLogoTitleButton';
import { DesktopNavMenu } from '../Desktop/DesktopNavMenu';
import styled from '@emotion/styled';
import { MouseEvent, useEffect } from 'react';
import { VStack, Overlay, Button } from '@/components/common';
import { NavProfile } from '@/components/elements/NavProfile';
import {
  isNavBarOpenAtom,
  toggleIsNavBarOpenAtom,
} from '@/utils/atoms/isNavBarOpenAtom';
import { useAtom } from 'jotai';
import { userAtom } from '@/utils/atoms/userAtom';
import { useNavigate } from 'react-router-dom';

export const TabletNavBar = () => {
  const [isNavBarOpen, setIsNavBarOpen] = useAtom(isNavBarOpenAtom);
  const [, toggleIsNavBarOpen] = useAtom(toggleIsNavBarOpenAtom);
  const [user] = useAtom(userAtom);
  const navigate = useNavigate();

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    navigate(`/profile/${user.login}`);
  };

  useEffect(() => {
    setIsNavBarOpen(false);
    return () => setIsNavBarOpen(false);
  }, [setIsNavBarOpen]);

  return (
    <>
      {isNavBarOpen && <Overlay onClick={toggleIsNavBarOpen} />}
      <TabletNavBarLayout isOpen={isNavBarOpen}>
        <VStack h="100%" spacing="6rem">
          <AppLogoTitleButton />
          <Button
            onClick={handleClick}
            element={
              <NavProfile
                imageUrl={user.imageUrl}
                name={user.name}
                login={user.login}
              />
            }
          />
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
