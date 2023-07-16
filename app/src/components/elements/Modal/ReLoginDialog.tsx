import { isReLoginDialogOpenAtom } from '@atoms/isReLoginDialogOpenAtom';
import { AlertDialog } from '@components/common/Dialog';
import { ROUTES } from '@routes/ROUTES';
import { clearStorage } from '@utils/storage/clearStorage';
import { useSetAtom } from 'jotai';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

type ReLoginDialogProps = {
  isOpen: boolean;
};

export const ReLoginDialog = ({ isOpen }: ReLoginDialogProps) => {
  const navigate = useNavigate();
  const setIsReLoginDialogOpen = useSetAtom(isReLoginDialogOpenAtom);

  const goToLandingPage = () => {
    navigate(ROUTES.ROOT);
  };

  const handleConfirm = () => {
    clearStorage();
    setIsReLoginDialogOpen(false);
    goToLandingPage();
  };

  useEffect(() => {
    if (!isOpen) {
      return;
    }
    clearStorage();
  }, [isOpen]);

  return (
    <AlertDialog
      isOpen={isOpen}
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
