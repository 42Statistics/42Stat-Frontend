import { useAtom, useSetAtom } from 'jotai';
import { useEffect } from 'react';

import { AlertDialog } from '@shared/ui-kit';
import { isEnterKeyDown, isEscapeKeyDown } from '@shared/utils/keyboard';
import { calculatorDialogAtom } from '@core/atoms/calculatorDialogAtom';
import { isProjectSpotlightOpenAtom } from '@/Calculator/atoms/isProjectSpotlightOpenAtom';

export const CalculatorDialog = () => {
  const [{ description, focus }, setCalculatorDialogAtom] =
    useAtom(calculatorDialogAtom);
  const setIsProjectSpotlightOpen = useSetAtom(isProjectSpotlightOpenAtom);

  const handleConfirm = () => {
    setCalculatorDialogAtom({
      isOpen: false,
      description: '',
      focus: -1,
    });
    setIsProjectSpotlightOpen(focus);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (isEnterKeyDown(e) || isEscapeKeyDown(e)) {
      e.preventDefault();
      handleConfirm();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <AlertDialog
      isOpen
      onClose={() => {
        /* can't close */
      }}
      title="프로젝트 추가 오류"
      description={description}
      confirmText="확인"
      onConfirm={handleConfirm}
    />
  );
};
