import { useAtomValue } from 'jotai';
import { Outlet } from 'react-router-dom';

import { calculatorDialogAtom } from '@core/atoms/calculatorDialogAtom';
import { logoutErrorAtom } from '@core/atoms/logoutErrorAtom';
import { isSpotlightOpenAtom } from '@core/atoms/isSpotlightOpenAtom';
import { reLoginDialogAtom } from '@core/atoms/reLoginDialogAtom';
import { CalculatorDialog } from '@core/components/Modal/CalculatorDialog';
import { LogoutErrorDialog } from '@core/components/Modal/LogoutErrorDialog';
import { ReLoginDialog } from '@core/components/Modal/ReLoginDialog';
import { Spotlight } from '@core/components/Spotlight';

export const ModalProvider = () => {
  const { isOpen: isCalculatorDialogOpen } = useAtomValue(calculatorDialogAtom);
  const isLogoutErrorDialogOpen = useAtomValue(logoutErrorAtom);
  const isReLoginDialogOpen = useAtomValue(reLoginDialogAtom);
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
