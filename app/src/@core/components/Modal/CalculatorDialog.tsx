import { useAtom, useSetAtom } from 'jotai';
import { useEffect } from 'react';

import { currentOpenSpotlightIndexAtom } from '@/Calculator/atoms/currentOpenSpotlightIndexAtom';
import { calculatorDialogAtom } from '@core/atoms/calculatorDialogAtom';
import { AlertDialog } from '@shared/ui-kit';
import { isEnterKeyDown, isEscapeKeyDown } from '@shared/utils/keyboard';

export const CalculatorDialog = () => {
  const [{ focus }, setCalculatorDialogAtom] = useAtom(calculatorDialogAtom);
  const setCurrentOpenSpotlightIndex = useSetAtom(
    currentOpenSpotlightIndexAtom,
  );

  const handleConfirm = () => {
    setCalculatorDialogAtom({
      isOpen: false,
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
      description="이미 추가된 프로젝트입니다."
      confirmText="확인"
      onConfirm={handleConfirm}
    />
  );
};
