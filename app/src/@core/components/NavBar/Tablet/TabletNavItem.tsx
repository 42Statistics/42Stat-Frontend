import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { CaptionText, VStack } from '@shared/ui-kit';
import { Link, useLocation } from 'react-router-dom';
import type { NavItemProps } from '../Desktop/DesktopNavItem';

type TabletNavItemProps = NavItemProps;

export const TabletNavItem = ({ route }: TabletNavItemProps) => {
  const location = useLocation();
  const isFocused = location.pathname.startsWith(route.path);
  const NavItemIcon = isFocused ? route.iconFocused : route.icon;
  const theme = useTheme();
  const color = isFocused
    ? theme.colors.primary.default
    : theme.colors.mono.black;

  return (
    <li style={{ width: '100%' }}>
      <Link to={route.path}>
        <Layout isFocused={isFocused}>
          <VStack>
            <NavItemIcon width={20} height={20} fill={color} />
            <CaptionText color={color}>{route.abbr}</CaptionText>
          </VStack>
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
  padding: 0.4rem 0;
  border-left: 4px solid
    ${({ theme, isFocused }) =>
      isFocused ? theme.colors.primary.default : 'transparent'};
`;
