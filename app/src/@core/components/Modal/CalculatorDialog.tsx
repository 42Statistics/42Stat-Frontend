import { useAtom, useSetAtom } from 'jotai';
import { useEffect } from 'react';

import { AlertDialog } from '@shared/ui-kit';
import { isEnterKeyDown, isEscapeKeyDown } from '@shared/utils/keyboard';
import { calculatorDialogAtom } from '@core/atoms/calculatorDialogAtom';
import { currentOpenSpotlightIndexAtom } from '@/Calculator/atoms/currentOpenSpotlightIndexAtom';

export const CalculatorDialog = () => {
  const [{ description, focus }, setCalculatorDialogAtom] =
    useAtom(calculatorDialogAtom);
  const setCurrentOpenSpotlightIndex = useSetAtom(
    currentOpenSpotlightIndexAtom,
  );

  const handleConfirm = () => {
    setCalculatorDialogAtom({
      isOpen: false,
      description: '',
      focus: -1,
    });
    setCurrentOpenSpotlightIndex(focus);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isEnterKeyDown(e) || isEscapeKeyDown(e)) {
        e.preventDefault();
        handleConfirm();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  });

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
