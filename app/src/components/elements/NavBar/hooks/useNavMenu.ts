import { NavMenuOption } from '@/utils/types/NavMenu';

export const useNavMenu = () => {
  const options: NavMenuOption[] = [
    { menu: 'MyProfile', text: '내 정보', path: '/profile/me' },
    { menu: 'Stat', text: '통계', path: '/stat' },
    { menu: 'LeaderBoard', text: '랭킹', path: '/leaderboard' },
    {
      menu: 'EvalLogSearch',
      text: '평가로그 검색기',
      path: '/eval-log-search',
      trailingSpacer: true,
    },
    { menu: 'Settings', text: '설정', path: '/settings' },
  ];

  return { options };
};
