import { atom } from 'jotai';

import { DateTemplate } from '@shared/__generated__/graphql';
import type { LeaderboardArgs } from '../types/LeaderboardArgs';

export const leaderboardArgsAtom = atom<LeaderboardArgs>({
  dateTemplate: DateTemplate.CurrWeek,
  pageNumber: 1,
  promo: null,
});
