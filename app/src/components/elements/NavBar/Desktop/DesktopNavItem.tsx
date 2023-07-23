import { Clickable, HStack, Text } from '@components/common';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { useLocation, useNavigate } from 'react-router-dom';
import type { NavRoute } from '../hooks/useNavRoutes';

export type NavItemProps = {
  route: NavRoute;
};

export const NavItem = ({ route }: NavItemProps) => {
  const location = useLocation();
  const isFocused = location.pathname === route.path;
  const NavItemIcon = isFocused ? route.iconFocused : route.icon;
  const theme = useTheme();
  const color = isFocused ? theme.colors.mono.white : theme.colors.mono.black;
  const navigate = useNavigate();

  return (
    <Layout isFocused={isFocused} onClick={() => navigate(route.path)}>
      <HStack spacing="1.5rem" justify="start">
        <NavItemIcon width={18} height={18} fill={color} />
        <Text color={color}>{route.text}</Text>
      </HStack>
    </Layout>
  );
};

type LayoutProps = {
  isFocused: boolean;
};

const Layout = styled(Clickable)<LayoutProps>`
  width: 100%;
  padding: 1rem 0 1rem 2rem;
  border-radius: ${({ theme }) => theme.radius.sm};
  cursor: pointer;
  transition: all 0.2s;

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
