import { SegmentType } from '@/components/common';
import { createRef } from 'react';

export const useSegmentedControl = (options: Omit<SegmentType, 'ref'>[]) => {
  const controlRef = createRef<HTMLDivElement>();
  const segmentRefs = options.map(() => createRef<HTMLDivElement>());
  const segments = options.map((option, i) => ({
    ...option,
    ref: segmentRefs[i],
  }));
  return { controlRef, segments };
};
