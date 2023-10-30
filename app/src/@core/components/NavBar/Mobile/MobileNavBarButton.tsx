import { useTheme } from '@emotion/react';

import { MobileNavBar } from '@core/components/NavBar/Mobile';
import { ReactComponent as MdMenu } from '@shared/assets/icon/md-menu.svg';
import { useDisclosure } from '@shared/hooks/useDisclosure';
import { Clickable } from '@shared/ui-kit';

export const MobileNavBarButton = () => {
  const theme = useTheme();

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Clickable onClick={onOpen} aria-label="메뉴 열기">
        <MdMenu width={22} height={22} fill={theme.colors.mono.black} />
      </Clickable>
      <MobileNavBar isOpen={isOpen} onClose={onClose} />
    </>
  );
};
