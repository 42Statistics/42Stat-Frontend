import { useSetAtom } from 'jotai';

import { logoutErrorAtom } from '@core/atoms/logoutErrorAtom';
import { AlertDialog } from '@shared/ui-kit';

export const LogoutErrorDialog = () => {
  const setLogoutErrorAtom = useSetAtom(logoutErrorAtom);

  const handleConfirm = () => {
    setLogoutErrorAtom(false);
  };

  return (
    <AlertDialog
      isOpen
      onClose={() => {
        /* can't close */
      }}
      title="로그아웃 오류"
      description="다시 시도해주세요."
      confirmText="확인"
      onConfirm={handleConfirm}
    />
  );
};
