import { Link, useLocation } from 'react-router-dom';

import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';

import type { NavRoute } from '@core/components/NavBar/hooks/useNavRoutes';

import { HStack, Text } from '@shared/ui-kit';

export type NavItemProps = {
  route: NavRoute;
};

// TODO: Link와 Layout을 합쳐서 StyledLink를 만들고 싶지만, styled(Link)에 isFocused라는 custom prop을 전달할 수 없음.
export const NavItem = ({ route }: NavItemProps) => {
  const theme = useTheme();
  const location = useLocation();

  const isFocused = location.pathname.startsWith(route.path);
  const NavItemIcon = isFocused ? route.iconFocused : route.icon;
  const color = isFocused ? theme.colors.mono.white : theme.colors.mono.black;

  return (
    <li style={{ width: '100%' }}>
      <Link to={route.path} style={{ display: 'block' }}>
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
