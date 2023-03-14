import { Text } from '@/styles/components';
import { Menu } from '@/utils/types/Menu';
import { getMenuPath } from '@/utils/getMenuPath';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { MouseEvent } from 'react';
import { Location, useNavigate } from 'react-router-dom';
import { MenuIcon } from './MenuIcon';

const getMenuText = (menu: Menu) => {
  switch (menu) {
    case 'Home':
      return '홈';
    case 'Total':
      return '전체';
    case 'About':
      return '서비스 소개';
    case 'Settings':
      return '설정';
    default:
      throw new Error('💥 Wrong Menu');
  }
};

type MenuItemProps = {
  menu: Menu;
  location: Location;
};

export const MenuItem = ({ menu, location }: MenuItemProps) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isFocused = location.pathname === getMenuPath(menu);

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    navigate(getMenuPath(menu));
  };

  return (
    <MenuItemLayout onClick={handleClick} isFocused={isFocused}>
      <MenuIcon menu={menu} isFocused={isFocused} />
      <Text fontSize={theme.fonts.h3}>{getMenuText(menu)}</Text>
    </MenuItemLayout>
  );
};

type MenuItemLayoutProps = {
  isFocused: boolean;
};

const MenuItemLayout = styled.li<MenuItemLayoutProps>`
  display: flex;
  gap: 15px;
  cursor: pointer;
  background-color: ${({ theme, isFocused }) =>
    isFocused ? theme.colors.primary.light : 'inherit'};
  padding: 10px 0 10px 20px;
  border-radius: 20px;
`;
