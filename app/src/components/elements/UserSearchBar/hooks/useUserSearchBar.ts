import { useState, ChangeEvent } from 'react';
import { useDebouncedSearchUser } from './useDebouncedSearchUser';
export const useUserSearchBar = () => {
  const { debouncedSearchUser } = useDebouncedSearchUser();
  const [input, setInput] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { value } = e.target;
    setInput(value);
    debouncedSearchUser(value);
  };

  return { input, handleChange };
};
