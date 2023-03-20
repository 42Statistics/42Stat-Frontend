export type NavMenu = 'Home' | 'Total' | 'About' | 'Settings';

export type NavMenuIconSvgProps = {
  isFocused: boolean;
};

export type NavMenuOption = {
  menu: Menu;
  text: string;
  path: string;
  trailingSpacer?: boolean;
};
