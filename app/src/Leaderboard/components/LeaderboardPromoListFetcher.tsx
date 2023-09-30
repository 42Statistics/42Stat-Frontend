import { useQuery } from '@apollo/client';

import { LeaderboardPromoListContext } from '../contexts/LeaderboardPromoListContext';
import { GET_LEADERBOARD_PROMO_LIST } from '../queries/getLeaderboardPromoList';

export default function LeaderboardPromoListFetcher({
  children,
}: React.PropsWithChildren) {
  const { loading, data } = useQuery(GET_LEADERBOARD_PROMO_LIST);

  if (loading) {
    return null;
  }

  const { promoList } = data?.getLeaderboardMetadata ?? {};

  return (
    <LeaderboardPromoListContext.Provider value={promoList}>
      {children}
    </LeaderboardPromoListContext.Provider>
  );
}
