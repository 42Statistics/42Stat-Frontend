import { getMenuPath } from '@/utils/getMenuPath';
import { Menu } from '@/utils/types/Menu';
import styled from '@emotion/styled';
import { MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { MenuIcon } from '../MenuIcon';

type MenuItemProps = {
  menu: Menu;
  location: Location;
};

export const MenuItem = ({ menu, location }: MenuItemProps) => {
  const navigate = useNavigate();
  const isFocused = location.pathname === getMenuPath(menu);

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    navigate(getMenuPath(menu));
  };

  return (
    <MenuItemLayout onClick={handleClick} isFocused={isFocused}>
      <MenuIcon menu={menu} isFocused={isFocused} />
    </MenuItemLayout>
  );
};

type MenuItemLayoutProps = {
  isFocused: boolean;
};

const MenuItemLayout = styled.li<MenuItemLayoutProps>`
  cursor: pointer;
`;
