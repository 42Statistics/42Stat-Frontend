import { atom } from 'jotai';

import type { Coalition } from '@shared/types/Coalition';

export const leaderboardCoalitionListAtom = atom<Coalition[]>([]);
