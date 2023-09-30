import { useDisclosure } from '@shared/hooks/useDisclosure';
import { createContext, useContext } from 'react';

type SelectDisclosure = ReturnType<typeof useDisclosure>;

export const SelectDisclosureContext = createContext<SelectDisclosure | null>(
  null,
);

export function useGetSelectDisclosureContext() {
  const selectDisclosure = useContext(SelectDisclosureContext);
  if (!selectDisclosure) {
    throw new Error(
      'useGetSelectDisclosureContext must be used within a Provider',
    );
  }
  return selectDisclosure;
}
