import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { Link, useLocation } from 'react-router-dom';

import type { NavItemProps } from '@core/components/NavBar/Desktop/DesktopNavItem';
import { CaptionText, VStack } from '@shared/ui-kit';

type TabItemProps = NavItemProps;

export const TabItem = ({ route }: TabItemProps) => {
  const theme = useTheme();
  const location = useLocation();

  const isFocused = location.pathname.startsWith(route.path);
  const TabItemIcon = isFocused ? route.iconFocused : route.icon;
  const color = isFocused
    ? theme.colors.primary.default
    : theme.colors.mono.black;

  return (
    <li style={{ height: '100%' }}>
      <Link to={route.path}>
        <Layout isFocused={isFocused} tabIndex={1}>
          <VStack>
            <TabItemIcon width={22} height={22} fill={color} />
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
  padding: 0.6rem 1.4rem;
`;
