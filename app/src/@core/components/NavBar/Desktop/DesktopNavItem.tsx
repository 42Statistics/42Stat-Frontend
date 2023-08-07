import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { HStack, Text } from '@shared/ui-kit';
import { Link, useLocation } from 'react-router-dom';
import type { NavRoute } from '../hooks/useNavRoutes';

export type NavItemProps = {
  route: NavRoute;
};

export const NavItem = ({ route }: NavItemProps) => {
  const location = useLocation();
  const isFocused = location.pathname.startsWith(route.path);
  const NavItemIcon = isFocused ? route.iconFocused : route.icon;
  const theme = useTheme();
  const color = isFocused ? theme.colors.mono.white : theme.colors.mono.black;

  return (
    <li style={{ width: '100%' }}>
      <Link to={route.path}>
        <Layout isFocused={isFocused}>
          <HStack spacing="1.5rem" justify="start">
            <NavItemIcon width={18} height={18} fill={color} />
            <Text color={color}>{route.text}</Text>
          </HStack>
        </Layout>
      </Link>
    </li>
  );
};

type LayoutProps = {
  isFocused: boolean;
};

const Layout = styled.div<LayoutProps>`
  width: 100%;
  padding: 1rem 0 1rem 2rem;
  border-radius: ${({ theme }) => theme.radius.sm};
  transition: background-color 0.2s;

  background-color: ${({ theme, isFocused }) =>
    isFocused && theme.colors.primary.default};

  &:hover {
    background-color: ${({ theme, isFocused }) =>
      !isFocused && theme.colors.element.hover};
  }

  &:active {
    background-color: ${({ theme, isFocused }) =>
      !isFocused && theme.colors.element.active};
  }
`;
