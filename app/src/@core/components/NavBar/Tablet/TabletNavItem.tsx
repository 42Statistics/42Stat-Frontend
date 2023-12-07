import { Link, useLocation } from 'react-router-dom';

import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';

import type { NavItemProps } from '@core/components/NavBar/shared/NavItem';

import { CaptionText, VStack } from '@shared/ui-kit';

type TabletNavItemProps = NavItemProps;

// TODO: Link와 Layout을 합쳐서 StyledLink를 만들고 싶지만, styled(Link)에 isFocused라는 custom prop을 전달할 수 없음.
export const TabletNavItem = ({ route }: TabletNavItemProps) => {
  const theme = useTheme();
  const location = useLocation();

  const isFocused = location.pathname.startsWith(route.path);
  const NavItemIcon = isFocused ? route.iconFocused : route.icon;
  const color = isFocused
    ? theme.colors.primary.default
    : theme.colors.mono.black;

  return (
    <li style={{ width: '100%' }}>
      <Link to={route.path} style={{ display: 'block' }}>
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
