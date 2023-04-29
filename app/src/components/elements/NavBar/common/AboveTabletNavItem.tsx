import { Text } from '@/components/common';
import { NavMenuOption } from '@/utils/types/NavMenu';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { useLocation, useNavigate } from 'react-router-dom';
import { NavMenuIcon } from './NavMenuIcon';

type DesktopNavItemProps = {
  option: NavMenuOption;
};

export const AboveTabletNavItem = ({ option }: DesktopNavItemProps) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const location = useLocation();
  const isFocused = location.pathname === option.path;

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    navigate(option.path);
  };

  return (
    <DesktopNavItemLayout onClick={handleClick} isFocused={isFocused}>
      <NavMenuIcon menu={option.menu} isFocused={isFocused} />
      <Text color={theme.colors.mono.white}>{option.text}</Text>
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
  opacity: ${({ isFocused }) => (isFocused ? 1 : 0.8)};
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;
