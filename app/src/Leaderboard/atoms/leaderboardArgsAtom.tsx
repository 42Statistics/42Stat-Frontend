import { atom } from 'jotai';

import type { LeaderboardArgs } from '../types/LeaderboardArgs';

export const leaderboardArgsAtom = atom<LeaderboardArgs | null>(null);
