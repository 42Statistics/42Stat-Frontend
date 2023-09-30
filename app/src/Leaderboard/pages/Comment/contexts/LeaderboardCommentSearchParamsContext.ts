import { createContext, useContext } from 'react';

export type LeaderboardCommentSearchParams = {
  pageNumber: number;
  promo: number | null; // null: 전체
};

export const LeaderboardCommentSearchParamsContext =
  createContext<LeaderboardCommentSearchParams | null>(null);

export function useGetLeaderboardCommentSearchParamsContext() {
  const leaderboardCommentSearchParams = useContext(
    LeaderboardCommentSearchParamsContext,
  );

  if (!leaderboardCommentSearchParams) {
    throw new Error(
      'useGetLeaderboardCommentSearchParamsContext must be used within a Provider',
    );
  }
  return leaderboardCommentSearchParams;
}
