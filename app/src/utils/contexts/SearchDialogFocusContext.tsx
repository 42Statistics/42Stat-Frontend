import { createContext } from 'react';

type SearchDialogFocusContextProps = {
  currentFocus: number;
  setCurrentFocus: React.Dispatch<React.SetStateAction<number>>;
};

export const SearchDialogFocusContext =
  createContext<SearchDialogFocusContextProps>({
    currentFocus: 0,
    setCurrentFocus: () => {
      /* pass */
    },
  });
