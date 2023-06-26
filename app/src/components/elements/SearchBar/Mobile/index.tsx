import { Clickable, Input } from '@components/common';
import { MdSearch } from '@react-icons/all-files/md/MdSearch';
import { useCallback, useState } from 'react';
import { SearchModal } from './SearchModal';

// TODO: SearchBar 추상화
export const MobileSearchBar = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const toggleModal = useCallback(() => setIsModalOpen((cur) => !cur), []);

  return (
    <>
      <Clickable onClick={toggleModal}>
        <Input
          leftElement={<MdSearch id="search-icon" size="24px" />}
          placeholder="Search..."
        />
      </Clickable>
      <SearchModal isOpen={isModalOpen} toggle={toggleModal} />
    </>
  );
};
