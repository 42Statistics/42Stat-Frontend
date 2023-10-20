import { atom } from 'jotai';

import type { Promo } from '@shared/__generated__/graphql';

export const leaderboardPromoListAtom = atom<Promo[]>([]);
