import { useEffect } from 'react';

import { useAtom } from 'jotai';

import type { GetEvalLogsQuery } from '@shared/__generated__/graphql';

import { evalLogSearchTotalCountAtom } from '@/EvalLogSearch/atoms/evalLogSearchTotalCountAtom';

import type { QueryResult } from '@apollo/client';

export const useSearchTotalCount = ({
  data,
  error,
}: Pick<QueryResult<GetEvalLogsQuery>, 'data' | 'error'>) => {
  const [evalLogSearchTotalCount, setEvalLogSearchTotalCount] = useAtom(
    evalLogSearchTotalCountAtom,
  );

  useEffect(() => {
    if (error) {
      setEvalLogSearchTotalCount(0);
      return;
    }

    if (data) {
      setEvalLogSearchTotalCount(data.getEvalLogs.pageInfo.totalCount);
      return;
    }

    setEvalLogSearchTotalCount(undefined);
  }, [data, error, setEvalLogSearchTotalCount]);

  return evalLogSearchTotalCount;
};
