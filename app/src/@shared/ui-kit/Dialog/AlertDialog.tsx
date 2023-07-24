import type { DialogBaseProps } from '@shared/types/Modal';
import { Button } from '../Button';
import { CustomDialog } from './CustomDialog';

type AlertDialogProps = DialogBaseProps & {
  title: string;
  description: string;
  confirmText: string;
  onConfirm: () => void;
};

export const AlertDialog = ({
  isOpen,
  onClose,
  title,
  description,
  confirmText,
  onConfirm,
}: AlertDialogProps) => {
  return (
    <CustomDialog isOpen={isOpen} onClose={onClose}>
      <CustomDialog.Header>{title}</CustomDialog.Header>
      <CustomDialog.Body>{description}</CustomDialog.Body>
      <CustomDialog.Footer>
        <Button onClick={onConfirm}>{confirmText}</Button>
      </CustomDialog.Footer>
    </CustomDialog>
  );
};
