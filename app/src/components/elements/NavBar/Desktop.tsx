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
  border-right: 0.1rem solid ${({ theme }) => theme.colors.mono.gray.light};
`;
