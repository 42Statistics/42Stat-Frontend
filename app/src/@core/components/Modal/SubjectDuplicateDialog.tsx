import { isSubjectDuplicateAtom } from '@core/atoms/isSubjectDuplicateAtom';
import { AlertDialog } from '@shared/ui-kit';
import { useAtom } from 'jotai';
import { useEffect } from 'react';

export const SubjectDuplicateDialog = () => {
  const [isOpen, setIsOpen] = useAtom(isSubjectDuplicateAtom);

  const closeSubjectDuplicateDialog = () => {
    setIsOpen(false);
  };

  const handleConfirm = () => {
    closeSubjectDuplicateDialog();
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
      title="재선택 요청"
      description="이미 선택된 프로젝트입니다"
      confirmText="확인"
      onConfirm={handleConfirm}
    />
  );
};
