import { ReactComponent as MdMenu } from '@shared/assets/icon/md-menu.svg';
import { Clickable } from '@shared/ui-kit';
import { useDisclosure } from '@shared/utils/hooks/useDisclosure';
import { isMacBKeyDown } from '@shared/utils/keyboard';
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
        <MdMenu width={22} height={22} />
      </Clickable>
      <TabletNavDrawerView isOpen={isOpen} onClose={onClose} />
    </>
  );
};
