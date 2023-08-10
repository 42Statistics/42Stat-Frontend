export const ROUTES = {
  ROOT: '/',
  HOME: '/home',
  FT_OAUTH_REQUEST: '/auth/ft/request',
  FT_OAUTH_REDIRECT: '/auth/ft/redirect',
  PROFILE: '/profile/:login',
  PROFILE_GENERAL: '/profile/:login/general',
  PROFILE_EVAL: '/profile/:login/eval',
  PROFILE_VERSUS: '/profile/:login/versus',
  PROFILE_OF: (login: string) => `/profile/${login}`,
  PROFILE_GENERAL_OF: (login: string) => `/profile/${login}/general`,
  PROFILE_EVAL_OF: (login: string) => `/profile/${login}/eval`,
  PROFILE_VERSUS_OF: (login: string) => `/profile/${login}/versus`,
  PROJECT_DETAIL: '/project/:projectName',
  PROJECT_DETAIL_OF: (projectName: string) => `/project/${projectName}`,
  LEADERBOARD: '/leaderboard',
  LEADERBOARD_LEVEL: '/leaderboard/level',
  LEADERBOARD_EXP_INCREMENT: '/leaderboard/exp_increment',
  LEADERBOARD_COALITION_SCORE: '/leaderboard/coalition_score',
  LEADERBOARD_EVAL_COUNT: '/leaderboard/eval_count',
  EVALLOG: '/evallog',
  TEAM: '/team/:id',
  TEAM_OF: (id: number) => `/team/${id}`,
  SETTING: '/setting',
} as const;
