import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import {
  LeaderboardEvalCountSearchParamsContext,
  type LeaderboardEvalCountSearchParams,
} from '../contexts/LeaderboardEvalCountSearchParamsContext';
import parseLeaderboardEvalCountSearchParams from '../utils/parseLeaderboardEvalCountSearchParams';

export default function LeaderboardEvalCountSearchParamsParser({
  children,
}: React.PropsWithChildren) {
  const [searchParams] = useSearchParams();
  const [parsedSearchParams, setParsedSearchParams] =
    useState<LeaderboardEvalCountSearchParams | null>(null);

  useEffect(() => {
    setParsedSearchParams(parseLeaderboardEvalCountSearchParams(searchParams));
  }, [searchParams]);

  if (!parsedSearchParams) {
    return null;
  }

  return (
    <LeaderboardEvalCountSearchParamsContext.Provider
      value={parsedSearchParams}
    >
      {children}
    </LeaderboardEvalCountSearchParamsContext.Provider>
  );
}
