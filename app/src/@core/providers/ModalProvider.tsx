import { Outlet } from 'react-router-dom';

import { useAtomValue } from 'jotai';

import { calculatorDialogAtom } from '@core/atoms/calculatorDialogAtom';
import { isLogoutErrorDialogOpenAtom } from '@core/atoms/isLogoutErrorDialogOpenAtom';
import { isSpotlightOpenAtom } from '@core/atoms/isSpotlightOpenAtom';
import { isReLoginDialogOpenAtom } from '@core/atoms/isReLoginDialogOpenAtom';
import { CalculatorDialog } from '@core/components/Modal/CalculatorDialog';
import { LogoutErrorDialog } from '@core/components/Modal/LogoutErrorDialog';
import { ReLoginDialog } from '@core/components/Modal/ReLoginDialog';
import { Spotlight } from '@core/components/Spotlight';

export const ModalProvider = () => {
  const { isOpen: isCalculatorDialogOpen } = useAtomValue(calculatorDialogAtom);
  const isLogoutErrorDialogOpen = useAtomValue(isLogoutErrorDialogOpenAtom);
  const isReLoginDialogOpen = useAtomValue(isReLoginDialogOpenAtom);
  const isSpotlightOpen = useAtomValue(isSpotlightOpenAtom);

  return (
    <>
      {isReLoginDialogOpen ? <ReLoginDialog /> : null}
      {isSpotlightOpen ? <Spotlight /> : null}
      {isCalculatorDialogOpen ? <CalculatorDialog /> : null}
      {isLogoutErrorDialogOpen ? <LogoutErrorDialog /> : null}
      <Outlet />
    </>
  );
};
