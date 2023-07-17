import { useDisclosure } from '@/hooks/useDisclosure';
import { Clickable, Input } from '@components/common';
import { RiSearchLine } from '@react-icons/all-files/ri/RiSearchLine';
import { SearchModal } from './SearchModal';

// TODO: SearchBar 추상화
export const MobileSearchBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Clickable onClick={onOpen}>
        <Input
          left={<RiSearchLine id="search-icon" size="24px" />}
          placeholder="Search"
          disabled
          style={{ width: '120px' }}
        />
      </Clickable>
      <SearchModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};
