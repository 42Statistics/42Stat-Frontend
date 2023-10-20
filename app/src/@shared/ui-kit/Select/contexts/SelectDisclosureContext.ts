import { createContext, useContext } from 'react';

import { useDisclosure } from '@shared/hooks/useDisclosure';

type SelectDisclosure = ReturnType<typeof useDisclosure>;

export const SelectDisclosureContext = createContext<SelectDisclosure | null>(
  null,
);

export const useGetSelectDisclosureContext = () => {
  const selectDisclosure = useContext(SelectDisclosureContext);
  if (!selectDisclosure) {
    throw new Error(
      'useGetSelectDisclosureContext must be used within a Provider',
    );
  }
  return selectDisclosure;
};
