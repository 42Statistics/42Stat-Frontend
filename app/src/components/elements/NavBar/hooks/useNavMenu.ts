import { NavMenuOption } from '@/utils/types/NavMenu';

export const useNavMenu = () => {
  const options: NavMenuOption[] = [
    { menu: 'Home', text: '홈', path: '/home' },
    { menu: 'Total', text: '전체', path: '/total' },
    {
      menu: 'EvalLogSearch',
      text: '평가로그 검색기',
      path: '/eval-log-search',
      trailingSpacer: true,
    },
    { menu: 'About', text: '서비스 소개', path: '/about' },
    { menu: 'Settings', text: '설정', path: '/settings' },
  ];

  return { options };
};
