import { debounce } from 'lodash';
import { useCallback } from 'react';

export const useDebouncedSearch = (search: (input: string) => void) => {
  const debouncedSearch = useCallback(
    debounce(async (input: string) => search(input), 100),
    [],
  );
  return { debouncedSearch };
};
