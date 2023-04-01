import { useState } from 'react';
import { useDebouncedSearch } from './useDebouncedSearch';

export const useSearchBar = (search: (input: string) => void) => {
  const { debouncedSearch } = useDebouncedSearch(search);
  const [input, setInput] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { value } = e.target;
    setInput(value);
    debouncedSearch(value);
  };

  return { input, setInput, handleChange };
};
