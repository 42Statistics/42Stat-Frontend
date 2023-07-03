import { useDisclosure } from '@/hooks/useDisclosure';
import { Clickable, Input } from '@components/common';
import { MdSearch } from '@react-icons/all-files/md/MdSearch';
import { SearchModal } from './SearchModal';

// TODO: SearchBar 추상화
export const MobileSearchBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Clickable onClick={onOpen}>
        <Input
          leftElement={<MdSearch id="search-icon" size="24px" />}
          placeholder="Search..."
          disabled
        />
      </Clickable>
      <SearchModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};
