import type { QueryResult } from '@apollo/client';
import { useAtom } from 'jotai';
import { useEffect } from 'react';

import { evalLogSearchTotalCountAtom } from '@/EvalLogSearch/atoms/evalLogSearchTotalCountAtom';
import type { GetEvalLogsQuery } from '@shared/__generated__/graphql';

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
