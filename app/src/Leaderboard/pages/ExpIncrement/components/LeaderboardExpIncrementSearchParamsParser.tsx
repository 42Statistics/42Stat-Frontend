import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import {
  LeaderboardExpIncrementSearchParamsContext,
  type LeaderboardExpIncrementSearchParams,
} from '../contexts/LeaderboardExpIncrementSearchParamsContext';
import parseLeaderboardExpIncrementSearchParams from '../utils/parseLeaderboardExpIncrementSearchParams';

export default function LeaderboardExpIncrementSearchParamsParser({
  children,
}: React.PropsWithChildren) {
  const [searchParams] = useSearchParams();
  const [parsedSearchParams, setParsedSearchParams] =
    useState<LeaderboardExpIncrementSearchParams | null>(null);

  useEffect(() => {
    setParsedSearchParams(
      parseLeaderboardExpIncrementSearchParams(searchParams),
    );
  }, [searchParams]);

  if (!parsedSearchParams) {
    return null;
  }

  return (
    <LeaderboardExpIncrementSearchParamsContext.Provider
      value={parsedSearchParams}
    >
      {children}
    </LeaderboardExpIncrementSearchParamsContext.Provider>
  );
}
