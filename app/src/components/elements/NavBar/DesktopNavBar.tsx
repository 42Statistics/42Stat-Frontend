import styled from '@emotion/styled';
import { AboveTabletNavBar } from './common/AboveTabletNavBar';

export const DesktopNavBar = () => {
  return (
    <DesktopNavBarLayout>
      <AboveTabletNavBar />
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
  box-shadow: ${({ theme }) =>
    `0.1rem 0 0.5rem 0 ${theme.colors.mono.gray100}`};
  z-index: 100;
`;
