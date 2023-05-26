import styled from '@emotion/styled';
import { NavBar } from './NavBar';

export const DesktopNavBar = () => {
  return (
    <DesktopNavBarLayout>
      <NavBar />
    </DesktopNavBarLayout>
  );
};

export const DesktopNavBarLayout = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 24rem;
  height: 100%;
  padding: 3rem;
  background-color: ${({ theme }) => theme.colors.mono.white};
`;
