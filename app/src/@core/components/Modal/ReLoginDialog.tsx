import { useAtom } from 'jotai';
import { useEffect } from 'react';

import { reLoginDialogInfoAtom } from '@core/atoms/reLoginDialogInfoAtom';
import { AlertDialog } from '@shared/ui-kit';
import { clearStorage } from '@shared/utils/storage/clearStorage';

export const ReLoginDialog = () => {
  const [{ isOpen, description }, setReLoginDialogInfo] = useAtom(
    reLoginDialogInfoAtom,
  );

  const closeReLoginDialog = () => {
    setReLoginDialogInfo({
      isOpen: false,
      description: '',
    });
  };

  const handleConfirm = () => {
    clearStorage();
    closeReLoginDialog();
    window.location.reload();
  };

  useEffect(() => {
    if (!isOpen) {
      return;
    }
    clearStorage();
  }, [isOpen]);

  return (
    <AlertDialog
      isOpen
      onClose={() => {
        /* can't close */
      }}
      title="재로그인 요청"
      description={description}
      confirmText="홈으로 이동"
      onConfirm={handleConfirm}
    />
  );
};
