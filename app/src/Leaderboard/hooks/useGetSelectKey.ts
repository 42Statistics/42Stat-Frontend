import { useLocation, useSearchParams } from 'react-router-dom';

import { toLeaderboardArgs } from '@/Leaderboard/utils/toLeaderboardArgs';

export const useGetSelectKey = () => {
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();
  const { dateTemplate, promo, coalitionId } = toLeaderboardArgs(searchParams);

  const promoSelectKey = [
    'promo',
    pathname,
    dateTemplate,
    promo,
    coalitionId?.toString() ?? '',
  ].join('&');

  const coalitionSelectKey = [
    'coalition',
    pathname,
    dateTemplate,
    promo,
    coalitionId?.toString() ?? '',
  ].join('&');

  return { promoSelectKey, coalitionSelectKey };
};
