import { useAtom } from 'jotai';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { reLoginDialogAtom } from '@core/atoms/reLoginDialogAtom';
import { ROUTES } from '@shared/constants/routes';
import { AlertDialog } from '@shared/ui-kit';
import { clearStorage } from '@shared/utils/storage/clearStorage';

export const ReLoginDialog = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useAtom(reLoginDialogAtom);

  const closeReLoginDialog = () => {
    setIsModalOpen(false);
  };

  const handleConfirm = () => {
    clearStorage();
    closeReLoginDialog();
    navigate(ROUTES.ROOT);
  };

  useEffect(() => {
    if (!isModalOpen) {
      return;
    }
    clearStorage();
  }, [isModalOpen]);

  return (
    <AlertDialog
      isOpen
      onClose={() => {
        /* can't close */
      }}
      title="재로그인 요청"
      description={
        /**
         * 현재 BE에서 400 상태코드를 Code로 구분해주지 않기 때문에, description이 항상 고정입니다.
         * 이후 BE에서 Code로 구분해주면, Code에 따라 상응하는 description(= ReLoginDialog body) 분기할 예정입니다.
         */
        '다시 로그인해주세요.'
      }
      confirmText="홈으로 이동"
      onConfirm={handleConfirm}
    />
  );
};
