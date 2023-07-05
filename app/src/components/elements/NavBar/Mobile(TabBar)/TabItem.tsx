import { CaptionText, VStack } from '@components/common';
import styled from '@emotion/styled';
import { useLocation, useNavigate } from 'react-router-dom';
import type { NavItemProps } from '../Desktop/DesktopNavItem';

type TabItemProps = NavItemProps;

export const TabItem = ({ route }: TabItemProps) => {
  const location = useLocation();
  const isFocused = location.pathname === route.path;
  const TabItemIcon = !isFocused ? route.icon : route.iconFocused;
  const navigate = useNavigate();

  // Link를 NavItemLayout 안에 넣으면 padding 부분을 눌렀을 때 작동하지 않아서 navigate으로 대체
  return (
    <Layout onClick={() => navigate(route.path)}>
      <VStack>
        <TabItemIcon size="22px" />
        <CaptionText>{route.abbr}</CaptionText>
      </VStack>
    </Layout>
  );
};

const Layout = styled.li`
  cursor: pointer;
`;
