export type NavMenu =
  | 'Home'
  | 'LeaderBoard'
  | 'MyProfile'
  | 'EvalLogSearch'
  | 'Settings';

export type NavMenuIconSvgProps = {
  isFocused: boolean;
};

export type NavMenuOption = {
  menu: NavMenu;
  text: string;
  path: string;
  trailingSpacer?: boolean;
};
