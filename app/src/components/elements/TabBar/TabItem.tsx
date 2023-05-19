import { CaptionText, VStack } from '@/components/common';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { useLocation, useNavigate } from 'react-router-dom';
import type { NavItemProps } from '../NavBar/NavItem';

export const TabItem = ({ route }: NavItemProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isFocused = location.pathname === route.path;
  const theme = useTheme();
  const TabItemIcon = route.icon;
  const TabItemIconFocused = route.iconFocused;
  const color = isFocused
    ? theme.colors.primary.default
    : theme.colors.mono.black;

  return (
    <TabItemLayout onClick={() => navigate(route.path)}>
      <VStack>
        {!isFocused ? (
          <TabItemIcon size="22px" fill={color} />
        ) : (
          <TabItemIconFocused size="22px" fill={color} />
        )}
        <CaptionText color={color}>{route.abbr}</CaptionText>
      </VStack>
    </TabItemLayout>
  );
};

const TabItemLayout = styled.li`
  cursor: pointer;
`;
