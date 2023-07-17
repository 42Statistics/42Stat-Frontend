import { CaptionText, VStack } from '@components/common';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { useLocation, useNavigate } from 'react-router-dom';
import type { NavItemProps } from '../Desktop/DesktopNavItem';

type TabletNavItemProps = NavItemProps;

export const TabletNavItem = ({ route }: TabletNavItemProps) => {
  const location = useLocation();
  const isFocused = location.pathname === route.path;
  const NavItemIcon = route.icon;
  const theme = useTheme();
  const color = isFocused ? theme.colors.mono.white : theme.colors.mono.black;
  const navigate = useNavigate();

  return (
    <Layout isFocused={isFocused} onClick={() => navigate(route.path)}>
      <VStack>
        <NavItemIcon size="20px" fill={color} />
        <CaptionText color={color}>{route.abbr}</CaptionText>
      </VStack>
    </Layout>
  );
};

type LayoutProps = {
  isFocused: boolean;
};

const Layout = styled.li<LayoutProps>`
  width: 100%;
  padding: 1rem 0;
  border-radius: ${({ theme }) => theme.radius.sm};
  cursor: pointer;
  background-color: ${({ theme, isFocused }) =>
    isFocused && theme.colors.primary.default};
`;
