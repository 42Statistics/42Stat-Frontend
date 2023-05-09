import type { NavMenuOption } from '@/utils/types/NavMenu';

export const useNavMenu = () => {
  const options: NavMenuOption[] = [
    { menu: 'Home', text: '홈', path: '/home' },
    { menu: 'MyProfile', text: '내 정보', path: '/profile/me' },
    { menu: 'LeaderBoard', text: '랭킹', path: '/leaderboard' },
    {
      menu: 'EvalLogSearch',
      text: '평가로그 검색기',
      path: '/evallog',
    },
  ];

  return { options };
};
