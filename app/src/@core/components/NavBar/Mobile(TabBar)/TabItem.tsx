import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { CaptionText, Clickable, VStack } from '@shared/ui-kit';
import { useLocation, useNavigate } from 'react-router-dom';
import type { NavItemProps } from '../Desktop/DesktopNavItem';

type TabItemProps = NavItemProps;

export const TabItem = ({ route }: TabItemProps) => {
  const location = useLocation();
  const isFocused = location.pathname.startsWith(route.path);
  const TabItemIcon = isFocused ? route.iconFocused : route.icon;
  const theme = useTheme();
  const color = isFocused
    ? theme.colors.primary.default
    : theme.colors.mono.black;
  const navigate = useNavigate();

  return (
    <Layout isFocused={isFocused} onClick={() => navigate(route.path)}>
      <VStack>
        <TabItemIcon width={22} height={22} fill={color} />
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
