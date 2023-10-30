import { atom } from 'jotai';

import type { Coalition } from '@shared/__generated__/graphql';

export const leaderboardCoalitionListAtom = atom<Coalition[]>([]);
