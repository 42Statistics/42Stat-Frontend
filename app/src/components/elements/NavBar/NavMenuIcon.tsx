import {
  HelpIconSvg,
  HomeIconSvg,
  SettingsIconSvg,
  TotalIconSvg,
} from '@/assets/icons';
import { NavMenu } from '@/utils/types/NavMenu';

type NavMenuIconProps = {
  menu: NavMenu;
  isFocused: boolean;
};

export const NavMenuIcon = ({ menu, isFocused }: NavMenuIconProps) => {
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
