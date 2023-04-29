import { NavMenu } from '@/utils/types/NavMenu';
import { useTheme } from '@emotion/react';
import {
  MdContentPasteSearch,
  MdEqualizer,
  MdHelp,
  MdHome,
  MdOutlineEmojiEvents,
  MdPerson,
  MdSettings,
} from 'react-icons/md';

type NavMenuIconProps = {
  menu: NavMenu;
  size?: string;
  isFocused: boolean;
};

export const NavMenuIcon = ({
  menu,
  size = '16px',
  isFocused,
}: NavMenuIconProps) => {
  const theme = useTheme();
  const color = isFocused
    ? theme.colors.primary.light
    : theme.colors.mono.white;

  switch (menu) {
    case 'Home':
      return <MdHome size={size} fill={color} />;
    case 'Stat':
      return <MdEqualizer size={size} fill={color} />;
    case 'LeaderBoard':
      return <MdOutlineEmojiEvents size={size} fill={color} />;
    case 'MyProfile':
      return <MdPerson size={size} fill={color} />;
    case 'EvalLogSearch':
      return <MdContentPasteSearch size={size} fill={color} />;
    case 'About':
      return <MdHelp size={size} fill={color} />;
    case 'Settings':
      return <MdSettings size={size} fill={color} />;
    default:
      throw new Error('💥 Wrong Menu');
  }
};
