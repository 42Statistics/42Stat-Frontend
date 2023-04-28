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
    case 'Stat':
      return <MdEqualizer size="24px" fill={color} />;
    case 'LeaderBoard':
      return <MdOutlineEmojiEvents size="24px" fill={color} />;
    case 'MyProfile':
      return <MdPerson size="24px" fill={color} />;
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
