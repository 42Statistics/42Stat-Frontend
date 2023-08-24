export const ALT = {
  AVATAR_OF: (login: string) => `${login} 사진`,
  COALITION_LOGO_OF: (name: string) => `코알리숑 ${name} 로고`,
  LOGO_42: '42 로고',
  POKEMON_OF: (name: string) => `포켓몬 ${name}`,
  POKEMON_NOT_FOUND: '포켓몬을 찾을 수 없습니다',
} as const;

export const ARIA_LABEL = {
  LINK: {
    STAT: '42 Stat',
    HOME: '홈',
    STAT_GITHUB: '42 Stat 깃허브',
    PROFILE_OF: (login: string) => `${login} 프로필`,
  } as const,
  BUTTON: {
    LOGIN_WITH_42_ACCOUNT: '42 계정으로 로그인',
    LOGIN_WITH_GOOGLE_ACCOUNT: '구글 계정으로 로그인',
    SEARCH_USER_OR_PROJECT_USING_SPOTLIGHT:
      '스포트라이트를 이용해 유저나 프로젝트 검색',
    PAGINATION: {
      FIRST_PAGE: '첫 페이지',
      PREVIOUS_PAGE_GROUP: '이전 페이지 그룹',
      NEXT_PAGE_GROUP: '다음 페이지 그룹',
      LAST_PAGE: '마지막 페이지',
      PAGE_OF: (page: number) => `${page} 페이지`,
      CURRENT_PAGE_OF: (page: number) => `현재 ${page} 페이지`,
    } as const,
    SWAP_CORRECTOR_AND_CORRECTED: '평가자와 피평가자 바꾸기',
    SEARCH_EVAL_LOGS: '평가 로그 검색',
    LINK_WITH: (provider: string) => `${provider} 계정으로 연결`,
    UNLINK_WITH: (provider: string) => `${provider} 계정 연결 해제`,
  } as const,
} as const;
