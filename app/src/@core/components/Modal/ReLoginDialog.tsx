import { isReLoginDialogOpenAtom } from '@core/atoms/isReLoginDialogOpenAtom';
import { ROUTES } from '@shared/constants/ROUTES';
import { AlertDialog } from '@shared/ui-kit';
import { clearStorage } from '@shared/utils/storage/clearStorage';
import { useAtom } from 'jotai';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const ReLoginDialog = () => {
  const navigate = useNavigate();
  const [isReLoginDialogOpen, setIsReLoginDialogOpen] = useAtom(
    isReLoginDialogOpenAtom,
  );

  const closeReLoginDialog = () => {
    setIsReLoginDialogOpen(false);
  };

  const handleConfirm = () => {
    clearStorage();
    closeReLoginDialog();
    navigate(ROUTES.ROOT);
  };

  useEffect(() => {
    if (!isReLoginDialogOpen) {
      return;
    }
    clearStorage();
  }, [isReLoginDialogOpen]);

  return (
    <AlertDialog
      isOpen
      onClose={() => {
        /* can't close */
      }}
      title="재로그인 요청"
      description="세션이 만료되어 로그아웃되었습니다. 다시 로그인해주세요."
      confirmText="홈으로 이동"
      onConfirm={handleConfirm}
    />
  );
};
