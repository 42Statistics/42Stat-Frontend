import { useDisclosure } from '@/hooks/useDisclosure';
import { Clickable } from '@components/common';
import { GiHamburgerMenu } from '@react-icons/all-files/gi/GiHamburgerMenu';
import { isMacBKeyDown } from '@utils/keyboard';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { TabletNavDrawerView } from './TabletNavDrawerView';

export const TabletNavDrawer = () => {
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();
  const location = useLocation();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isMacBKeyDown(e)) {
        e.preventDefault();
        onToggle();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onToggle]);

  useEffect(() => {
    onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <>
      <Clickable onClick={onOpen}>
        <GiHamburgerMenu size="18px" />
      </Clickable>
      <TabletNavDrawerView isOpen={isOpen} onClose={onClose} />
    </>
  );
};
