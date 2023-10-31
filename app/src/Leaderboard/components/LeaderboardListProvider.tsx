import { useQuery } from '@apollo/client';
import { useSetAtom } from 'jotai';
import { useEffect } from 'react';

import { leaderboardCoalitionListAtom } from '@/Leaderboard/atoms/leaderboardCoalitionListAtom';
import { leaderboardPromoListAtom } from '@/Leaderboard/atoms/leaderboardPromoListAtom';
import { GET_LEADERBOARD_LIST } from '@/Leaderboard/queries/getLeaderboardList';
import { FullPageApolloErrorView } from '@shared/components/ApolloError/FullPageApolloErrorView';

export const LeaderboardListProvider = ({
  children,
}: React.PropsWithChildren) => {
  const { loading, error, data } = useQuery(GET_LEADERBOARD_LIST);
  const setPromoList = useSetAtom(leaderboardPromoListAtom);
  const setCoalitionList = useSetAtom(leaderboardCoalitionListAtom);

  useEffect(() => {
    if (!data) {
      return;
    }

    const { promoList, coalitionList } = data.getLeaderboardMetadata;
    setPromoList(promoList);
    setCoalitionList(coalitionList);
  }, [data, setPromoList, setCoalitionList]);

  if (loading) {
    return null;
  }
  if (error) {
    return <FullPageApolloErrorView message={error.message} />;
  }

  return <>{children}</>;
};
