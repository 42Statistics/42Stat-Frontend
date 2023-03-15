import {
  HelpIconSvg,
  HomeIconSvg,
  SettingsIconSvg,
  TotalIconSvg,
} from '@/assets/icons';
import { Menu } from '@/utils/types/Menu';

type MenuIconProps = {
  menu: Menu;
  isFocused: boolean;
};

export const MenuIcon = ({ menu, isFocused }: MenuIconProps) => {
  switch (menu) {
    case 'Home':
      return <HomeIconSvg isFocused={isFocused} />;
    case 'Total':
      return <TotalIconSvg isFocused={isFocused} />;
    case 'About':
      return <HelpIconSvg isFocused={isFocused} />;
    case 'Settings':
      return <SettingsIconSvg isFocused={isFocused} />;
    default:
      throw new Error('💥 Wrong Men');
  }
};
