import { reLoginDialogInfoAtom } from '@core/atoms/reLoginDialogInfoAtom';
import { ROUTES } from '@shared/constants/ROUTES';
import { AlertDialog } from '@shared/ui-kit';
import { clearStorage } from '@shared/utils/storage/clearStorage';
import { useAtom } from 'jotai';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const ReLoginDialog = () => {
  const navigate = useNavigate();
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
    navigate(ROUTES.ROOT);
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
