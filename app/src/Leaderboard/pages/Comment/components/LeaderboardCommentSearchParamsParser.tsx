import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import {
  LeaderboardCommentSearchParamsContext,
  type LeaderboardCommentSearchParams,
} from '../contexts/LeaderboardCommentSearchParamsContext';
import parseLeaderboardCommentSearchParams from '../utils/parseLeaderboardCommentSearchParams';

export default function LeaderboardCommentSearchParamsParser({
  children,
}: React.PropsWithChildren) {
  const [searchParams] = useSearchParams();
  const [parsedSearchParams, setParsedSearchParams] =
    useState<LeaderboardCommentSearchParams | null>(null);

  useEffect(() => {
    setParsedSearchParams(parseLeaderboardCommentSearchParams(searchParams));
  }, [searchParams]);

  if (!parsedSearchParams) {
    return null;
  }

  return (
    <LeaderboardCommentSearchParamsContext.Provider value={parsedSearchParams}>
      {children}
    </LeaderboardCommentSearchParamsContext.Provider>
  );
}
