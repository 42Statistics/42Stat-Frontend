import { NavMenu } from '@/utils/types/NavMenu';
import { useTheme } from '@emotion/react';
import {
  MdContentPasteSearch,
  MdHelp,
  MdHome,
  MdSettings,
} from 'react-icons/md';
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
      return <MdHome size="24px" fill={color} />;
    case 'Total':
      return <RiGlobalFill size="24px" fill={color} />;
    case 'EvalLogSearch':
      return <MdContentPasteSearch size="24px" fill={color} />;
    case 'About':
      return <MdHelp size="24px" fill={color} />;
    case 'Settings':
      return <MdSettings size="24px" fill={color} />;
    default:
      throw new Error('💥 Wrong Menu');
  }
};
