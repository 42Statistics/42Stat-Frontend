import { createContext, useContext } from 'react';

type SelectValue = {
  value: string | null;
  setValue: React.Dispatch<React.SetStateAction<string | null>>;
  renderValue: string;
  setRenderValue: React.Dispatch<React.SetStateAction<string>>;
  onValueChange?: (value: string | null) => void;
};

export const SelectValueContext = createContext<SelectValue | null>(null);

export function useGetSelectValueContext() {
  const selectValue = useContext(SelectValueContext);
  if (!selectValue) {
    throw new Error('useGetSelectValueContext must be used within a Provider');
  }
  return selectValue;
}
