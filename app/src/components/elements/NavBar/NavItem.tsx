import { HStack, Text } from '@/components/common';
import type { NavRoute } from '@/routes/NAV_ROUTES';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { useLocation, useNavigate } from 'react-router-dom';

export type NavItemProps = {
  route: NavRoute;
};

export const NavItem = ({ route }: NavItemProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isFocused = location.pathname === route.path;
  const theme = useTheme();
  const NavItemIcon = route.icon;
  const color = isFocused ? theme.colors.mono.white : theme.colors.mono.black;

  return (
    <NavItemLayout onClick={() => navigate(route.path)} isFocused={isFocused}>
      <HStack spacing="1.5rem" justify="start">
        <NavItemIcon size="16px" fill={color} />
        <Text color={color}>{route.text}</Text>
      </HStack>
    </NavItemLayout>
  );
};

const NavItemLayout = styled.li<{ isFocused: boolean }>`
  width: 100%;
  padding: 1rem 0 1rem 2rem;
  border-radius: 2rem;
  cursor: pointer;
  background-color: ${({ isFocused, theme }) =>
    isFocused ? theme.colors.primary.default : 'inherit'};
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ isFocused, theme }) =>
      isFocused ? theme.colors.primary.default : theme.colors.primary.light};
  }
`;
