import { useRef } from 'react';
import { useIntersectionObserver } from 'usehooks-ts';

export const useInfiniteScroll = (threshold = 0.5) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, { threshold });
  const isVisible = !!entry?.isIntersecting;
  return { ref, isVisible };
};
