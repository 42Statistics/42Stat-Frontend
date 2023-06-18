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
import { RiLogoutBoxRFill } from '@react-icons/all-files/ri/RiLogoutBoxRFill';
import { RiLogoutBoxRLine } from '@react-icons/all-files/ri/RiLogoutBoxRLine';
import { RiStackFill } from '@react-icons/all-files/ri/RiStackFill';
import { RiStackLine } from '@react-icons/all-files/ri/RiStackLine';
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
      path: ROUTES.ROOT,
      icon: RiHome2Line,
      iconFocused: RiHome2Fill,
    },
    PROFILE: {
      text: '유저 정보',
      abbr: '유저',
      path: `/profile/${user.login}`,
      icon: MdPersonOutline,
      iconFocused: MdPerson,
    },
    PROJECT: {
      text: '프로젝트 목록',
      abbr: '프로젝트',
      path: ROUTES.PROJECT,
      icon: RiStackLine,
      iconFocused: RiStackFill,
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
    LOGOUT: {
      text: '로그아웃',
      abbr: '로그아웃',
      path: ROUTES.LOGOUT,
      icon: RiLogoutBoxRLine,
      iconFocused: RiLogoutBoxRFill,
    },
  };

  return { NAV_ROUTES };
};
