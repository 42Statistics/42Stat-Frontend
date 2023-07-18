import { CaptionText, Clickable, VStack } from '@components/common';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { useLocation, useNavigate } from 'react-router-dom';
import type { NavItemProps } from '../Desktop/DesktopNavItem';

type TabItemProps = NavItemProps;

export const TabItem = ({ route }: TabItemProps) => {
  const location = useLocation();
  const isFocused = location.pathname === route.path;
  const TabItemIcon = isFocused ? route.iconFocused : route.icon;
  const theme = useTheme();
  const color = isFocused
    ? theme.colors.primary.default
    : theme.colors.mono.black;
  const navigate = useNavigate();

  return (
    <Layout isFocused={isFocused} onClick={() => navigate(route.path)}>
      <VStack>
        <TabItemIcon size="22px" fill={color} />
        <CaptionText color={color}>{route.abbr}</CaptionText>
      </VStack>
    </Layout>
  );
};

type LayoutProps = {
  isFocused: boolean;
};

const Layout = styled(Clickable)<LayoutProps>`
  cursor: pointer;
  padding: 0.6rem 1.4rem;
`;
