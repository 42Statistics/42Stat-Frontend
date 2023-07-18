import { isSearchDialogOpenAtom } from '@atoms/isSearchDialogOpenAtom';
import { Clickable } from '@components/common';
import { RiSearchLine } from '@react-icons/all-files/ri/RiSearchLine';
import { useSetAtom } from 'jotai';

export const SearchBarButton = () => {
  const setIsSearchDialogOpen = useSetAtom(isSearchDialogOpenAtom);

  return (
    <Clickable onClick={() => setIsSearchDialogOpen(true)}>
      <RiSearchLine size="16px" />
    </Clickable>
  );
};
