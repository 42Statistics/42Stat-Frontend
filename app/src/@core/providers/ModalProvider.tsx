import { useAtomValue } from 'jotai';
import { Outlet } from 'react-router-dom';

import { calculatorDialogAtom } from '@core/atoms/calculatorDialogAtom';
import { logoutErrorAtom } from '@core/atoms/logoutErrorAtom';
import { isSpotlightOpenAtom } from '@core/atoms/isSpotlightOpenAtom';
import { reLoginDialogInfoAtom } from '@core/atoms/reLoginDialogInfoAtom';
import { CalculatorDialog } from '@core/components/Modal/CalculatorDialog';
import { LogoutErrorDialog } from '@core/components/Modal/LogoutErrorDialog';
import { ReLoginDialog } from '@core/components/Modal/ReLoginDialog';
import { Spotlight } from '@core/components/Spotlight';

export const ModalProvider = () => {
  const { isOpen: isReLoginDialogOpen } = useAtomValue(reLoginDialogInfoAtom);
  const { isOpen: isCalculatorDialogOpen } = useAtomValue(calculatorDialogAtom);
  const isLogoutErrorDialogOpen = useAtomValue(logoutErrorAtom);
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
