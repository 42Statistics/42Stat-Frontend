import { calculatorDialogAtom } from '@core/atoms/calculatorDialogAtom';
import { AlertDialog } from '@shared/ui-kit';
import { useAtom } from 'jotai';
import { useEffect } from 'react';

export const CalculatorDialog = () => {
  const [{ isOpen, description }, setCalculatorDialogAtom] =
    useAtom(calculatorDialogAtom);

  const closeCalculatorDialog = () => {
    setCalculatorDialogAtom({
      isOpen: false,
      description: '',
    });
  };

  const handleConfirm = () => {
    closeCalculatorDialog();
  };

  useEffect(() => {
    if (!isOpen) {
      return;
    }
  }, [isOpen]);

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
