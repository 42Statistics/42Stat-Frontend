import { useSetAtom } from 'jotai';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { setEvalLogSearchArgsByURLSearchParamsAtom } from '@/EvalLogSearch/atoms/evalLogSearchArgsAtom';
import type { PropsWithReactNodeChildren } from '@shared/types/PropsWithChildren';

export const EvalLogSearchURLReader = ({
  children,
}: PropsWithReactNodeChildren) => {
  const [searchParams] = useSearchParams();

  const setEvalLogSearchArgs = useSetAtom(
    setEvalLogSearchArgsByURLSearchParamsAtom,
  );

  useEffect(() => {
    setEvalLogSearchArgs(searchParams);
  }, [searchParams, setEvalLogSearchArgs]);

  return <>{children}</>;
};
