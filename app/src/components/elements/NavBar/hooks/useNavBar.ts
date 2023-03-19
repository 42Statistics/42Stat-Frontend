import { NavMenu } from '@/utils/types/NavMenu';

export type NavMenuOption = {
  menu: NavMenu;
  text: string;
  path: string;
  trailingSpacer?: boolean;
};

export const useNavBar = () => {
  const options: NavMenuOption[] = [
    { menu: 'Home', text: '홈', path: '/home' },
    { menu: 'Total', text: '전체', path: '/total', trailingSpacer: true },
    { menu: 'About', text: '서비스 소개', path: '/about' },
    { menu: 'Settings', text: '설정', path: '/settings' },
  ];

  return { options };
};
