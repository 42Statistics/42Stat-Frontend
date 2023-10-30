import { atom } from 'jotai';

import type { Promo } from '@shared/types/Promo';

export const leaderboardPromoListAtom = atom<Promo[]>([]);
