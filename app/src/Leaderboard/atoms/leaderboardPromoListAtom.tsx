import { Promo } from '@shared/__generated__/graphql';
import { atom } from 'jotai';

export const leaderboardPromoListAtom = atom<Promo[]>([]);
