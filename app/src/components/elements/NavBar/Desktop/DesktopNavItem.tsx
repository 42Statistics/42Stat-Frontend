import { Text } from '@/styles/components';
import { NavMenuOption } from '@/utils/types/NavMenu';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { MouseEvent } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { NavMenuIcon } from '../NavMenuIcon';

type DesktopNavItemProps = {
  option: NavMenuOption;
};

export const DesktopNavItem = ({ option }: DesktopNavItemProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isFocused = location.pathname === option.path;
  const theme = useTheme();

  const handleClick = (e: MouseEvent<HTMLElement>) => {
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
  width: 100%;
  gap: 1.5rem;
  align-items: center;
  cursor: pointer;
  background-color: ${({ theme, isFocused }) =>
    isFocused ? theme.colors.primary.light : 'inherit'};
  padding: 1rem 0 1rem 2rem;
  border-radius: 2rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.light};
  }
`;
