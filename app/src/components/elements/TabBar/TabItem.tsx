import { Text, VStack } from '@/components/common';
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
  const color = isFocused
    ? theme.colors.primary.default
    : theme.colors.mono.black;

  return (
    <TabItemLayout onClick={() => navigate(route.path)}>
      <VStack>
        <TabItemIcon size="22px" fill={color} />
        <Text color={color} fontSize={theme.fonts.size.caption}>
          {route.abbr}
        </Text>
      </VStack>
    </TabItemLayout>
  );
};

const TabItemLayout = styled.li`
  cursor: pointer;
`;
