import { useCallback, useEffect, useRef } from 'react';

export const useIntersection = <TTargetElement extends HTMLElement>(
  callback: (target: IntersectionObserverEntry) => void,
  options?: IntersectionObserverInit,
) => {
  const observingRef = useRef<TTargetElement | null>(null);

  const observerCallback: IntersectionObserverCallback = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      entries
        .filter((entry) => entry.target === observingRef.current)
        .forEach(callback);
    },
    [observingRef, callback],
  );

  useEffect(() => {
    if (!observingRef.current) {
      return;
    }

    const observer = new IntersectionObserver(observerCallback, {
      ...options,
    });

    observer.observe(observingRef.current);

    return () => observer.disconnect();
  }, [observingRef, observerCallback, options]);

  return observingRef;
};
