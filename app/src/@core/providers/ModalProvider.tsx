import { useAtomValue } from 'jotai';

import { calculatorDialogAtom } from '@core/atoms/calculatorDialogAtom';
import { isSpotlightOpenAtom } from '@core/atoms/isSpotlightOpenAtom';
import { reLoginDialogInfoAtom } from '@core/atoms/reLoginDialogInfoAtom';
import { CalculatorDialog } from '@core/components/Modal/CalculatorDialog';
import { ReLoginDialog } from '@core/components/Modal/ReLoginDialog';
import { Spotlight } from '@core/components/Spotlight';
import type { PropsWithReactElementChildren } from '@shared/types/PropsWithChildren';

const ModalProvider = ({ children }: PropsWithReactElementChildren) => {
  const { isOpen: isReLoginDialogOpen } = useAtomValue(reLoginDialogInfoAtom);
  const { isOpen: isCalculatorDialogOpen } = useAtomValue(calculatorDialogAtom);
  const isSpotlightOpen = useAtomValue(isSpotlightOpenAtom);

  return (
    <>
      {isReLoginDialogOpen ? <ReLoginDialog /> : null}
      {isSpotlightOpen ? <Spotlight /> : null}
      {isCalculatorDialogOpen ? <CalculatorDialog /> : null}
      {children}
    </>
  );
};

export default ModalProvider;
