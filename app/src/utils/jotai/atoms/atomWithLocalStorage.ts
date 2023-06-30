import { atomWithStorage } from 'jotai/utils';

export const atomWithLocalStorage = (
  key: string,
  initialValue: string | null,
) => {
  return atomWithStorage(key, initialValue, {
    getItem: (key) => {
      return localStorage.getItem(key);
    },
    setItem: (key, newValue) => {
      if (newValue === null) {
        localStorage.removeItem(key);
        return;
      }
      localStorage.setItem(key, newValue);
    },
    removeItem: (key) => {
      localStorage.removeItem(key);
    },
  });
};
