import { useQuery } from '@apollo/client';
import { useSetAtom } from 'jotai';
import { useEffect } from 'react';

import { leaderboardPromoListAtom } from '../atoms/leaderboardPromoListAtom';
import { GET_LEADERBOARD_PROMO_LIST } from '../queries/getLeaderboardPromoList';

export function LeaderboardPromoListFetcher({
  children,
}: React.PropsWithChildren) {
  const { loading, data } = useQuery(GET_LEADERBOARD_PROMO_LIST);
  const setPromoList = useSetAtom(leaderboardPromoListAtom);

  useEffect(() => {
    if (!data) {
      return;
    }

    const { promoList } = data.getLeaderboardMetadata;
    setPromoList(promoList);
  }, [data, setPromoList]);

  if (loading) {
    return null;
  }

  return <>{children}</>;
}
