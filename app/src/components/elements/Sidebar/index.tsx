import { Spacer, VStack } from '@/styles/components';
import styled from '@emotion/styled';
import { useLocation } from 'react-router-dom';
import { MenuItem } from './MenuItem';
import { Logo } from '../Logo';

export const Sidebar = () => {
  const location = useLocation();

  return (
    <SidebarLayout>
      <VStack h="100%" spacing="60px">
        <Logo />
        <p>박용준</p>
        <VStack as="ul" w="100%" h="100%" spacing="20px">
          <MenuItem menu="Home" location={location} />
          <MenuItem menu="Total" location={location} />
          <Spacer />
          <MenuItem menu="About" location={location} />
          <MenuItem menu="Settings" location={location} />
        </VStack>
      </VStack>
    </SidebarLayout>
  );
};

const SidebarLayout = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 260px;
  height: 100%;
  padding: 30px;
  background-color: ${({ theme }) => theme.colors.mono.white};
  border-right: 1px solid ${({ theme }) => theme.colors.mono.gray.default};
`;
