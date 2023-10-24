import { useAtom } from 'jotai';

import { isDialogOpenAtom } from '@core/atoms/isDialogOpenAtom';
import { AlertDialog } from '@shared/ui-kit';

export const Dialog = () => {
  const [{ title, description, confirmText }, setIsDialogOpenAtom] =
    useAtom(isDialogOpenAtom);

  const handleConfirm = () => {
    setIsDialogOpenAtom({
      isOpen: false,
      title: '',
      description: '',
      confirmText: '',
    });
  };

  return (
    <AlertDialog
      isOpen
      onClose={() => {
        /* can't close */
      }}
      title={title}
      description={description}
      confirmText={confirmText}
      onConfirm={handleConfirm}
    />
  );
};
