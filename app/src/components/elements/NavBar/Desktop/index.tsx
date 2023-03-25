import { AppLogoTitleButton } from '@/components/elements/AppLogoTitleButton';
import { DesktopNavMenu } from './DesktopNavMenu';
import { VStack, Button } from '@/components/common';
import styled from '@emotion/styled';
import { NavProfile } from '@/components/elements/NavProfile';
import { userAtom } from '@/utils/atoms/userAtom';
import { useAtom } from 'jotai';
import { useNavigate } from 'react-router-dom';
import { MouseEvent } from 'react';

export const DesktopNavBar = () => {
  const [user] = useAtom(userAtom);

  const navigate = useNavigate();

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    navigate(`/profile/${user.login}`);
  };

  return (
    <>
      <DesktopNavBarLayout>
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
      </DesktopNavBarLayout>
    </>
  );
};

const DesktopNavBarLayout = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 24rem;
  height: 100%;
  padding: 3rem;
  background-color: ${({ theme }) => theme.colors.mono.white};
  border-right: 0.1rem solid ${({ theme }) => theme.colors.mono.gray.light};
`;
