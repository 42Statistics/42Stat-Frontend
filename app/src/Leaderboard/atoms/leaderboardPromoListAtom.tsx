import { atom } from 'jotai';

import type { Promo } from '@/Leaderboard/types/Promo';

export const leaderboardPromoListAtom = atom<Promo[]>([]);
