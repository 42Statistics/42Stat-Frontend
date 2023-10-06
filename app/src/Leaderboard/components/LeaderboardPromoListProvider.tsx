import { useQuery } from '@apollo/client';
import { useSetAtom } from 'jotai';
import { useEffect } from 'react';

import { FullPageApolloErrorView } from '@shared/components/ApolloError/FullPageApolloErrorView';
import { leaderboardPromoListAtom } from '../atoms/leaderboardPromoListAtom';
import { GET_LEADERBOARD_PROMO_LIST } from '../queries/getLeaderboardPromoList';

export function LeaderboardPromoListProvider({
  children,
}: React.PropsWithChildren) {
  const { loading, error, data } = useQuery(GET_LEADERBOARD_PROMO_LIST);
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
  if (error) {
    return <FullPageApolloErrorView message={error.message} />;
  }

  return <>{children}</>;
}
