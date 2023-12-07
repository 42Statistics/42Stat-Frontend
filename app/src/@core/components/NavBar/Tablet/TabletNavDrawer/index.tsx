import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { useTheme } from '@emotion/react';
import { detect } from 'detect-browser';

import { TabletNavDrawerView } from '@core/components/NavBar/Tablet/TabletNavDrawer/TabletNavDrawerView';

import { ReactComponent as MdMenu } from '@shared/assets/icon/md-menu.svg';
import { useDisclosure } from '@shared/hooks/useDisclosure';
import { Clickable } from '@shared/ui-kit';
import { isCtrlBKeyDown, isMacBKeyDown } from '@shared/utils/keyboard';

export const TabletNavDrawer = () => {
  const theme = useTheme();
  const location = useLocation();
  const browser = detect();

  const isMacOS = browser?.os === 'Mac OS';

  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((isMacOS && isMacBKeyDown(e)) || (!isMacOS && isCtrlBKeyDown(e))) {
        e.preventDefault();
        onToggle();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onToggle, isMacOS]);

  useEffect(() => {
    onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <>
      <Clickable onClick={onOpen} aria-label="메뉴 열기">
        <MdMenu width={22} height={22} fill={theme.colors.mono.black} />
      </Clickable>
      <TabletNavDrawerView isOpen={isOpen} onClose={onClose} />
    </>
  );
};
