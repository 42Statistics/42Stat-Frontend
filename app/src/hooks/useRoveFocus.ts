// https://dev.to/rafi993/roving-focus-in-react-with-custom-hooks-1ln

import { isArrowDownKeyDown, isArrowUpKeyDown } from '@utils/keyboard';
import { useCallback, useEffect, useState } from 'react';

export const useRoveFocus = (size: number) => {
  const [currentFocus, setCurrentFocus] = useState<number>(0);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (isArrowDownKeyDown(e)) {
        e.preventDefault();
        setCurrentFocus((currentFocus) =>
          currentFocus === size - 1 ? 0 : currentFocus + 1,
        );
      } else if (isArrowUpKeyDown(e)) {
        e.preventDefault();
        setCurrentFocus((currentFocus) =>
          currentFocus === 0 ? size - 1 : currentFocus - 1,
        );
      }
    },
    [size],
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  });

  return { currentFocus, setCurrentFocus };
};
