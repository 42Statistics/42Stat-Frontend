import { CaptionText, VStack } from '@components/common';
import styled from '@emotion/styled';
import { useLocation, useNavigate } from 'react-router-dom';
import type { NavItemProps } from '../NavBar/NavItem';

export const TabItem = ({ route }: NavItemProps) => {
  const location = useLocation();
  const isFocused = location.pathname === route.path;
  const TabItemIcon = route.icon;
  const TabItemIconFocused = route.iconFocused;
  const navigate = useNavigate();

  // Link를 NavItemLayout 안에 넣으면 padding 부분을 눌렀을 때 작동하지 않아서 navigate으로 대체
  return (
    <TabItemLayout onClick={() => navigate(route.path)}>
      <VStack>
        {!isFocused ? (
          <TabItemIcon size="22px" />
        ) : (
          <TabItemIconFocused size="22px" />
        )}
        <CaptionText>{route.abbr}</CaptionText>
      </VStack>
    </TabItemLayout>
  );
};

const TabItemLayout = styled.li`
  cursor: pointer;
`;
