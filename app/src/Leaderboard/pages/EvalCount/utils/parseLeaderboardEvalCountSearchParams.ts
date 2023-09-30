import { LEADERBOARD_PARAM_KEYS } from '@/Leaderboard/constants/paramKeys';
import {
  parseDateTemplate,
  parsePageNumber,
  parsePromo,
} from '@/Leaderboard/utils/parse';
import { DateTemplate } from '@shared/__generated__/graphql';

import type { LeaderboardEvalCountSearchParams } from '../contexts/LeaderboardEvalCountSearchParamsContext';

export default function parseLeaderboardEvalCountSearchParams(
  searchParams: URLSearchParams,
): LeaderboardEvalCountSearchParams {
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
