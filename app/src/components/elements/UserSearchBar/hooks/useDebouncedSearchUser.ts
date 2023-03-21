import { useCallback } from 'react';
import { debounce } from 'lodash';

const searchUser = (input: string) => {
  // TODO: 실제 검색으로 바꾸기
  console.log(input);
};

export const useDebouncedSearchUser = () => {
  const debouncedSearchUser = useCallback(
    debounce(async (input: string) => searchUser(input), 100),
    [],
  );
  return { debouncedSearchUser };
};
