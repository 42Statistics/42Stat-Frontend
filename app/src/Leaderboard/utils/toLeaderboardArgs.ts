import { DateTemplate } from '@shared/__generated__/graphql';

import { LEADERBOARD_PARAM_KEYS } from '../constants/paramKeys';
import type { LeaderboardArgs } from '../types/LeaderboardArgs';
import { parseDateTemplate, parsePageNumber, parsePromo } from './parse';

export function toLeaderboardArgs(
  searchParams: URLSearchParams,
): LeaderboardArgs {
  const { DATE, PAGE, PROMO } = LEADERBOARD_PARAM_KEYS;

  const dateTemplate = parseDateTemplate(
    searchParams.get(DATE),
    DateTemplate.CurrWeek,
  );
  const pageNumber = parsePageNumber(searchParams.get(PAGE));
  const promo = parsePromo(searchParams.get(PROMO));

  return {
    dateTemplate,
    pageNumber,
    promo,
  };
}
