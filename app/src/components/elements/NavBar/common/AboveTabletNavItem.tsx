import { Text } from '@/components/common';
import { NavMenuOption } from '@/utils/types/NavMenu';
import styled from '@emotion/styled';
import { useLocation, useNavigate } from 'react-router-dom';
import { NavMenuIcon } from './NavMenuIcon';

type DesktopNavItemProps = {
  option: NavMenuOption;
};

export const AboveTabletNavItem = ({ option }: DesktopNavItemProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isFocused = location.pathname === option.path;

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    navigate(option.path);
  };

  return (
    <DesktopNavItemLayout onClick={handleClick} isFocused={isFocused}>
      <NavMenuIcon menu={option.menu} isFocused={isFocused} />
      <Text>{option.text}</Text>
    </DesktopNavItemLayout>
  );
};

type DesktopNavItemLayoutProps = {
  isFocused: boolean;
};

const DesktopNavItemLayout = styled.li<DesktopNavItemLayoutProps>`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  width: 100%;
  padding: 1rem 0 1rem 2rem;
  border-radius: 2rem;
  background-color: ${({ theme, isFocused }) =>
    isFocused ? theme.colors.primary.light : 'inherit'};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.light};
  }
`;
