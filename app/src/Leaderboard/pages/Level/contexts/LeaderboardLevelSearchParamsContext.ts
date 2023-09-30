import { createContext, useContext } from 'react';

export type LeaderboardLevelSearchParams = {
  pageNumber: number;
  promo: number | null; // null: 전체
};

export const LeaderboardLevelSearchParamsContext =
  createContext<LeaderboardLevelSearchParams | null>(null);

export function useGetLeaderboardLevelSearchParamsContext() {
  const leaderboardLevelSearchParams = useContext(
    LeaderboardLevelSearchParamsContext,
  );

  if (!leaderboardLevelSearchParams) {
    throw new Error(
      'useGetLeaderboardLevelSearchParamsContext must be used within a Provider',
    );
  }
  return leaderboardLevelSearchParams;
}
