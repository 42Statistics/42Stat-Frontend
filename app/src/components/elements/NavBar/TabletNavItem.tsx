import { CaptionText, VStack } from '@/components/common';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { useLocation, useNavigate } from 'react-router-dom';
import type { NavItemProps } from './NavItem';

export const TabletNavItem = ({ route }: NavItemProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isFocused = location.pathname === route.path;
  const theme = useTheme();
  const NavItemIcon = route.icon;
  const NavItemIconFocused = route.iconFocused;
  const color = isFocused
    ? theme.colors.primary.default
    : theme.colors.mono.black;

  return (
    <TabletNavItemLayout
      onClick={() => navigate(route.path)}
      isFocused={isFocused}
    >
      <VStack>
        {!isFocused ? (
          <NavItemIcon size="20px" fill={color} />
        ) : (
          <NavItemIconFocused size="20px" fill={color} />
        )}
        <CaptionText color={color}>{route.abbr}</CaptionText>
      </VStack>
    </TabletNavItemLayout>
  );
};

const TabletNavItemLayout = styled.li<{ isFocused: boolean }>`
  width: 100%;
  padding: 1rem 0;
  cursor: pointer;
  transition: background-color 0.2s;
`;
