import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useSetAtom } from 'jotai';

import type { PropsWithReactNodeChildren } from '@shared/types/PropsWithChildren';

import { setEvalLogSearchArgsByURLSearchParamsAtom } from '@/EvalLogSearch/atoms/evalLogSearchArgsAtom';

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
