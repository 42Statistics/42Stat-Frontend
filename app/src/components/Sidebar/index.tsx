import { Spacer, vstack } from '@/styles/components';
import styled from '@emotion/styled';
import { useLocation } from 'react-router-dom';
import { MenuItem } from './MenuItem';
import { Logo } from './Logo';

export const Sidebar = () => {
  const location = useLocation();

  return (
    <SidebarLayout>
      <Logo />
      <p>박용준</p>
      <MenuList>
        <MenuItem menu="Home" location={location} />
        <MenuItem menu="Total" location={location} />
        <Spacer />
        <MenuItem menu="About" location={location} />
        <MenuItem menu="Settings" location={location} />
      </MenuList>
    </SidebarLayout>
  );
};

const SidebarLayout = styled.nav`
  ${vstack}
  height: 100%;
  gap: 60px;
  padding: 30px;
  background-color: ${({ theme }) => theme.colors.mono.white};
  border-right: 1px solid ${({ theme }) => theme.colors.mono.gray.default};
`;

const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 20px;
`;
