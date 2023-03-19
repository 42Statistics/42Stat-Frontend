import styled from '@emotion/styled';
import { MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavMenuIcon } from '../NavMenuIcon';
import { NavMenuOption } from '../hooks/useNavBar';

type MobileNavItemProps = {
  option: NavMenuOption;
  location: Location;
};

export const MobileNavItem = ({ option, location }: MobileNavItemProps) => {
  const navigate = useNavigate();
  const isFocused = location.pathname === option.path;

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    navigate(option.path);
  };

  return (
    <MobileNavItemLayout onClick={handleClick} isFocused={isFocused}>
      <NavMenuIcon menu={option.menu} isFocused={isFocused} />
    </MobileNavItemLayout>
  );
};

type MobileNavItemLayoutProps = {
  isFocused: boolean;
};

const MobileNavItemLayout = styled.li<MobileNavItemLayoutProps>`
  cursor: pointer;
`;
