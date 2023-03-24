import { NavMenu } from '@/utils/types/NavMenu';
import { useTheme } from '@emotion/react';
import { MdHome, MdHelp, MdSettings } from 'react-icons/md';
import { RiGlobalFill } from 'react-icons/ri';

type NavMenuIconProps = {
  menu: NavMenu;
  isFocused: boolean;
};

export const NavMenuIcon = ({ menu, isFocused }: NavMenuIconProps) => {
  const theme = useTheme();
  const color = isFocused
    ? theme.colors.primary.default
    : theme.colors.mono.black;

  switch (menu) {
    case 'Home':
      return <MdHome size="2.4rem" fill={color} />;
    case 'Total':
      return <RiGlobalFill size="2.4rem" fill={color} />;
    case 'About':
      return <MdHelp size="2.4rem" fill={color} />;
    case 'Settings':
      return <MdSettings size="2.4rem" fill={color} />;
    default:
      throw new Error('💥 Wrong Menu');
  }
};
