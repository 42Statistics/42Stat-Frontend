import { CaptionText, VStack } from '@components/common';
import styled from '@emotion/styled';
import { useLocation, useNavigate } from 'react-router-dom';
import type { NavItemProps } from '../shared/NavItem';

export const TabletNavItem = ({ route }: NavItemProps) => {
  const location = useLocation();
  const isFocused = location.pathname === route.path;
  const NavItemIcon = !isFocused ? route.icon : route.iconFocused;
  const navigate = useNavigate();

  // Link를 NavItemLayout 안에 넣으면 padding 부분을 눌렀을 때 작동하지 않아서 navigate으로 대체
  return (
    <TabletNavItemLayout
      isFocused={isFocused}
      onClick={() => navigate(route.path)}
    >
      <VStack>
        <NavItemIcon size="20px" />
        <CaptionText>{route.abbr}</CaptionText>
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
