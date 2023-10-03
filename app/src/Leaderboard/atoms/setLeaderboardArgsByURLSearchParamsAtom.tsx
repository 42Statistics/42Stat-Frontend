import { atom } from 'jotai';

import { toLeaderboardArgs } from '../utils/toLeaderboardArgs';
import { leaderboardArgsAtom } from './leaderboardArgsAtom';

export const setLeaderboardArgsByURLSearchParamsAtom = atom(
  null,
  (_, set, searchParams: URLSearchParams) =>
    set(leaderboardArgsAtom, toLeaderboardArgs(searchParams)),
);
