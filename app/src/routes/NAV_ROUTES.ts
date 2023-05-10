import { IconType } from '@react-icons/all-files';
import { MdGrade } from '@react-icons/all-files/md/MdGrade';
import { MdHome } from '@react-icons/all-files/md/MdHome';
import { MdPerson } from '@react-icons/all-files/md/MdPerson';
import { MdSearch } from '@react-icons/all-files/md/MdSearch';
import { RiLogoutBoxRFill } from '@react-icons/all-files/ri/RiLogoutBoxRFill';
import { ROUTES } from './ROUTES';

export type NavRoute = {
  text: string;
  abbr: string;
  path: string;
  icon: IconType;
};

export const NAV_ROUTES: { [name: string]: NavRoute } = {
  HOME: { text: '홈', abbr: '홈', path: ROUTES.HOME, icon: MdHome },
  MY_PROFILE: {
    text: '내 정보',
    abbr: '내 정보',
    path: '/profile/me',
    icon: MdPerson,
  },
  LEADERBOARD: {
    text: '랭킹',
    abbr: '랭킹',
    path: ROUTES.LEADERBOARD,
    icon: MdGrade,
  },
  EVALLOG: {
    text: '평가로그 검색기',
    abbr: '평가로그',
    path: ROUTES.EVALLOG,
    icon: MdSearch,
  },
  LOGOUT: {
    text: '로그아웃',
    abbr: '로그아웃',
    path: ROUTES.LOGOUT,
    icon: RiLogoutBoxRFill,
  },
};