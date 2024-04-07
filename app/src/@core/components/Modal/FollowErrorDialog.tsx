import { useSetAtom } from 'jotai';

import { followErrorDialogAtom } from '@core/atoms/followErrorDialogAtom';

import { AlertDialog } from '@shared/ui-kit';

export const LogoutErrorDialog = () => {
  const setIsModalOpen = useSetAtom(followErrorDialogAtom);

  const handleConfirm = () => {
    setIsModalOpen(false);
  };

  return (
    <AlertDialog
      isOpen
      onClose={() => {
        /* can't close */
      }}
      title="팔로우 오류"
      description="다시 시도해주세요."
      confirmText="확인"
      onConfirm={handleConfirm}
    />
  );
};
