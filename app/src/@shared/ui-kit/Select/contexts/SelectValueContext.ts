import { createContext, useContext } from 'react';

type SelectValue = {
  internalValue: string | null;
  setInternalValue: React.Dispatch<React.SetStateAction<string | null>>;
  renderValue: string;
  setRenderValue: React.Dispatch<React.SetStateAction<string>>;
  onValueChange?: (value: string | null) => void;
};

export const SelectValueContext = createContext<SelectValue | null>(null);

export const useGetSelectValueContext = () => {
  const selectValue = useContext(SelectValueContext);
  if (!selectValue) {
    throw new Error('useGetSelectValueContext must be used within a Provider');
  }
  return selectValue;
};
