import { ReactComponent as MdHomeFill } from '@shared/assets/icon/md-home-fill.svg';
import { ReactComponent as MdHome } from '@shared/assets/icon/md-home.svg';
import { ReactComponent as MdLeaderboardFill } from '@shared/assets/icon/md-leaderboard-fill.svg';
import { ReactComponent as MdLeaderboard } from '@shared/assets/icon/md-leaderboard.svg';
import { ReactComponent as MdPersonFill } from '@shared/assets/icon/md-person-fill.svg';
import { ReactComponent as MdPerson } from '@shared/assets/icon/md-person.svg';
import { ReactComponent as MdQuickReferenceFill } from '@shared/assets/icon/md-quick-reference-fill.svg';
import { ReactComponent as MdQuickReference } from '@shared/assets/icon/md-quick-reference.svg';
import { ReactComponent as MdCalculateFill} from '@shared/assets/icon/md-calculate-fill.svg';
import { ReactComponent as MdCalculate} from '@shared/assets/icon/md-calculate.svg';
import { ReactComponent as MdSettingsFill } from '@shared/assets/icon/md-settings-fill.svg';
import { ReactComponent as MdSettings } from '@shared/assets/icon/md-settings.svg';
import { userAtom } from '@shared/atoms/userAtom';
import { ROUTES } from '@shared/constants/routes';
import type { SvgElement } from '@shared/types/SvgElement';
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
      path: ROUTES.PROFILE_OF(user.login),
      icon: MdPerson,
      iconFocused: MdPersonFill,
    },
    LEADERBOARD: {
      text: '랭킹',
      abbr: '랭킹',
      path: ROUTES.LEADERBOARD,
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
		CALCULATOR: {
			text: '블랙홀 계산기',
			abbr: '계산기',
			path: ROUTES.CALCULATOR,
			icon: MdCalculate,
			iconFocused: MdCalculateFill,
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
