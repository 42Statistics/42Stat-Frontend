import { AppLogoTitleButton } from '@/components/elements/AppLogoTitleButton';
import { DesktopNavMenu } from './DesktopNavMenu';
import { VStack } from '@/styles/components';
import styled from '@emotion/styled';

export const DesktopNavBar = () => {
  return (
    <>
      <DesktopNavBarLayout>
        <VStack h="100%" spacing="6rem">
          <AppLogoTitleButton />
          <p>박용준</p>
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
