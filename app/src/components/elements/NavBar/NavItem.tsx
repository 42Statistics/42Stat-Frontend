import { HStack, Text } from '@components/common';
import styled from '@emotion/styled';
import { useLocation, useNavigate } from 'react-router-dom';
import type { NavRoute } from './hooks';

export type NavItemProps = {
  route: NavRoute;
};

export const NavItem = ({ route }: NavItemProps) => {
  const location = useLocation();
  const isFocused = location.pathname === route.path;
  const NavItemIcon = route.icon;
  const NavItemIconFocused = route.iconFocused;
  const navigate = useNavigate();

  // Link를 NavItemLayout 안에 넣으면 padding 부분을 눌렀을 때 작동하지 않아서 navigate으로 대체
  return (
    <NavItemLayout isFocused={isFocused} onClick={() => navigate(route.path)}>
      <HStack spacing="1.5rem" justify="start">
        {!isFocused ? (
          <NavItemIcon size="16px" />
        ) : (
          <NavItemIconFocused size="16px" />
        )}
        <Text>{route.text}</Text>
      </HStack>
    </NavItemLayout>
  );
};

const NavItemLayout = styled.li<{ isFocused: boolean }>`
  width: 100%;
  padding: 1.2rem 0 1.2rem 2rem;
  border-radius: 2rem;
  cursor: pointer;
  box-shadow: ${({ isFocused }) =>
    isFocused && 'inset 7px 7px 7px #f0f0f0, inset -7px -7px 7px #ffffff'};
  transition: box-shadow 0.4s;

  :hover {
    box-shadow: ${({ isFocused }) =>
      !isFocused && '7px 7px 7px #e9e9e9, -7px -7px 7px #ffffff'};
  }
  :active {
    box-shadow: inset 7px 7px 7px #f0f0f0, inset -7px -7px 7px #ffffff;
  }
`;
