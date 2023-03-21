import { ChangeEvent, useRef } from 'react';
import { useDebouncedSearchUser } from './useDebouncedSearchUser';
export const useUserSearchBar = () => {
  const { debouncedSearchUser } = useDebouncedSearchUser();
  const inputRef = useRef<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { value } = e.target;
    inputRef.current = value;
    debouncedSearchUser(value);
  };

  return { inputRef, handleChange };
};
