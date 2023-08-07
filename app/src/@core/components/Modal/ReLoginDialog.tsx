import { ROUTES } from '@shared/constants/ROUTES';
import { DialogBaseProps } from '@shared/types/Modal';
import { AlertDialog } from '@shared/ui-kit';
import { clearStorage } from '@shared/utils/storage/clearStorage';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

type ReLoginDialogProps = DialogBaseProps;

export const ReLoginDialog = ({ isOpen, onClose }: ReLoginDialogProps) => {
  const navigate = useNavigate();

  const handleConfirm = () => {
    clearStorage();
    onClose();
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
