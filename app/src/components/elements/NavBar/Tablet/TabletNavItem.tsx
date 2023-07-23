import { CaptionText, Clickable, VStack } from '@components/common';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { useLocation, useNavigate } from 'react-router-dom';
import type { NavItemProps } from '../Desktop/DesktopNavItem';

type TabletNavItemProps = NavItemProps;

export const TabletNavItem = ({ route }: TabletNavItemProps) => {
  const location = useLocation();
  const isFocused = location.pathname === route.path;
  const NavItemIcon = isFocused ? route.iconFocused : route.icon;
  const theme = useTheme();
  const color = isFocused
    ? theme.colors.primary.default
    : theme.colors.mono.black;
  const navigate = useNavigate();

  return (
    <Layout isFocused={isFocused} onClick={() => navigate(route.path)}>
      <VStack>
        <NavItemIcon width={20} height={20} fill={color} />
        <CaptionText color={color}>{route.abbr}</CaptionText>
      </VStack>
    </Layout>
  );
};

type LayoutProps = {
  isFocused: boolean;
};

const Layout = styled(Clickable)<LayoutProps>`
  width: 100%;
  padding: 0.4rem 0;
  border-left: 4px solid
    ${({ theme, isFocused }) =>
      isFocused ? theme.colors.primary.default : 'transparent'};

  cursor: pointer;
`;
