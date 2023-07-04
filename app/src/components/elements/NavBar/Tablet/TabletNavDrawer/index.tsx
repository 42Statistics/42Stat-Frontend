import { useDisclosure } from '@/hooks/useDisclosure';
import { Clickable } from '@components/common';
import { GiHamburgerMenu } from '@react-icons/all-files/gi/GiHamburgerMenu';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { TabletNavDrawerView } from './TabletNavDrawerView';

export const TabletNavDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();

  useEffect(() => {
    onClose();
  }, [location, onClose]);

  return (
    <>
      <Clickable onClick={onOpen}>
        <GiHamburgerMenu size="18px" />
      </Clickable>
      <TabletNavDrawerView isOpen={isOpen} onClose={onClose} />
    </>
  );
};
