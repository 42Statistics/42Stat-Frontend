import { ROUTES } from '@/constants/ROUTES';
import type { SvgElement } from '@/types/SvgElement';
import { ReactComponent as MdHomeFill } from '@assets/icon/md-home-fill.svg';
import { ReactComponent as MdHome } from '@assets/icon/md-home.svg';
import { ReactComponent as MdLeaderboardFill } from '@assets/icon/md-leaderboard-fill.svg';
import { ReactComponent as MdLeaderboard } from '@assets/icon/md-leaderboard.svg';
import { ReactComponent as MdPersonFill } from '@assets/icon/md-person-fill.svg';
import { ReactComponent as MdPerson } from '@assets/icon/md-person.svg';
import { ReactComponent as MdQuickReferenceFill } from '@assets/icon/md-quick-reference-fill.svg';
import { ReactComponent as MdQuickReference } from '@assets/icon/md-quick-reference.svg';
import { ReactComponent as MdSettingsFill } from '@assets/icon/md-settings-fill.svg';
import { ReactComponent as MdSettings } from '@assets/icon/md-settings.svg';
import { userAtom } from '@atoms/userAtom';
import { useAtomValue } from 'jotai';

export type NavRoute = {
  text: string;
  abbr: string;
  path: string;
  icon: SvgElement;
  iconFocused: SvgElement;
};

export const useNavRoutes = () => {
  const user = useAtomValue(userAtom);

  const NAV_ROUTES: { [name: string]: NavRoute } = {
    HOME: {
      text: '홈',
      abbr: '홈',
      path: ROUTES.HOME,
      icon: MdHome,
      iconFocused: MdHomeFill,
    },
    PROFILE: {
      text: '내 정보',
      abbr: '내 정보',
      path: `${ROUTES.PROFILE_ROOT}/${user.login}`,
      icon: MdPerson,
      iconFocused: MdPersonFill,
    },
    LEADERBOARD: {
      text: '랭킹',
      abbr: '랭킹',
      path: ROUTES.LEADERBOARD_ROOT,
      icon: MdLeaderboard,
      iconFocused: MdLeaderboardFill,
    },
    EVALLOG: {
      text: '평가로그 검색기',
      abbr: '평가로그',
      path: ROUTES.EVALLOG,
      icon: MdQuickReference,
      iconFocused: MdQuickReferenceFill,
    },
    SETTING: {
      text: '설정',
      abbr: '설정',
      path: ROUTES.SETTING,
      icon: MdSettings,
      iconFocused: MdSettingsFill,
    },
  } as const;

  return { NAV_ROUTES };
};
