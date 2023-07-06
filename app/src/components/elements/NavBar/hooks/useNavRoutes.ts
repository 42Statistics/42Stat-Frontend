import { userAtom } from '@atoms/userAtom';
import { IconType } from '@react-icons/all-files';
import { MdPerson } from '@react-icons/all-files/md/MdPerson';
import { MdPersonOutline } from '@react-icons/all-files/md/MdPersonOutline';
import { RiArticleFill } from '@react-icons/all-files/ri/RiArticleFill';
import { RiArticleLine } from '@react-icons/all-files/ri/RiArticleLine';
import { RiBarChart2Fill } from '@react-icons/all-files/ri/RiBarChart2Fill';
import { RiBarChart2Line } from '@react-icons/all-files/ri/RiBarChart2Line';
import { RiHome2Fill } from '@react-icons/all-files/ri/RiHome2Fill';
import { RiHome2Line } from '@react-icons/all-files/ri/RiHome2Line';
import { RiSettings3Fill } from '@react-icons/all-files/ri/RiSettings3Fill';
import { RiSettings3Line } from '@react-icons/all-files/ri/RiSettings3Line';
import { ROUTES } from '@routes/ROUTES';
import { useAtomValue } from 'jotai';

export type NavRoute = {
  text: string;
  abbr: string;
  path: string;
  icon: IconType;
  iconFocused: IconType;
};

export const useNavRoutes = () => {
  const user = useAtomValue(userAtom);

  const NAV_ROUTES: { [name: string]: NavRoute } = {
    HOME: {
      text: '홈',
      abbr: '홈',
      path: ROUTES.HOME,
      icon: RiHome2Line,
      iconFocused: RiHome2Fill,
    },
    PROFILE: {
      text: '내 정보',
      abbr: '내 정보',
      path: `/profile/${user.login}`,
      icon: MdPersonOutline,
      iconFocused: MdPerson,
    },
    LEADERBOARD: {
      text: '랭킹',
      abbr: '랭킹',
      path: ROUTES.LEADERBOARD,
      icon: RiBarChart2Line,
      iconFocused: RiBarChart2Fill,
    },
    EVALLOG: {
      text: '평가로그 검색기',
      abbr: '평가로그',
      path: ROUTES.EVALLOG,
      icon: RiArticleLine,
      iconFocused: RiArticleFill,
    },
    SETTING: {
      text: '설정',
      abbr: '설정',
      path: ROUTES.SETTING,
      icon: RiSettings3Line,
      iconFocused: RiSettings3Fill,
    },
  } as const;

  return { NAV_ROUTES };
};
