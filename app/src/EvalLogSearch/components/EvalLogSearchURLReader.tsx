import { PropsWithReactNodeChildren } from '@shared/types/PropsWithChildren';
import { useSetAtom } from 'jotai';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { setEvalLogSearchArgsByURLSearchParamsAtom } from '../atoms/evalLogSearchArgsAtom';

export const EvalLogSearchURLReader = ({
  children,
}: PropsWithReactNodeChildren) => {
  const [searchParams] = useSearchParams();

  const setEvalLogSearchArgs = useSetAtom(
    setEvalLogSearchArgsByURLSearchParamsAtom,
  );

  useEffect(() => {
    setEvalLogSearchArgs(searchParams);
  }, [searchParams]);

  return <>{children}</>;
};
