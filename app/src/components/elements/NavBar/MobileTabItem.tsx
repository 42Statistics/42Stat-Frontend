import type { NavMenuOption } from '@/utils/types/NavMenu';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { rgba } from 'emotion-rgba';
import { useLocation, useNavigate } from 'react-router-dom';
import { NavMenuIcon } from './common/NavMenuIcon';

type MobileTabItemProps = {
  option: NavMenuOption;
};

export const MobileTabItem = ({ option }: MobileTabItemProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isFocused = location.pathname === option.path;
  const theme = useTheme();

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    navigate(option.path);
  };

  return (
    <MobileTabItemLayout onClick={handleClick} isFocused={isFocused}>
      <NavMenuIcon
        size="24px"
        menu={option.menu}
        color={
          isFocused
            ? rgba(theme.colors.primary.default, 0.85)
            : theme.colors.mono.black
        }
      />
    </MobileTabItemLayout>
  );
};

type MobileTabItemLayoutProps = {
  isFocused: boolean;
};

const MobileTabItemLayout = styled.li<MobileTabItemLayoutProps>`
  cursor: pointer;
`;
