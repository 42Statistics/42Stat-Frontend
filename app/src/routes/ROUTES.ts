export const ROUTES = {
  ROOT: '/',
  HOME: '/home',
  FT_OAUTH: '/ftoauth',
  FT_OAUTH_REDIRECT: '/auth/ft/redirect',
  PROFILE_ROOT: '/profile',
  PROFILE: '/profile/:username',
  PROJECT_ROOT: '/project',
  PROJECT_DETAIL: '/project/:projectName',
  LEADERBOARD: '/leaderboard',
  EVALLOG: '/evallog',
  SETTING: '/setting',
} as const;
