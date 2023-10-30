import { atom } from 'jotai';

import type { Coalition } from '@/Leaderboard/types/Coalition';

export const leaderboardCoalitionListAtom = atom<Coalition[]>([]);
