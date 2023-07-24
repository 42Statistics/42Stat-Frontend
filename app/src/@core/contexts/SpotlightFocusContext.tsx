import { createContext } from 'react';

type SpotlightFocusContextProps = {
  currentFocus: number;
  setCurrentFocus: React.Dispatch<React.SetStateAction<number>>;
};

export const SpotlightFocusContext = createContext<SpotlightFocusContextProps>({
  currentFocus: 0,
  setCurrentFocus: () => {
    /* pass */
  },
});
