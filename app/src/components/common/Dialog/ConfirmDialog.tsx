import { DialogBaseProps } from '@/types/Modal';
import { useTheme } from '@emotion/react';
import { Button } from '../Button';
import { CustomDialog } from './CustomDialog';

type ConfirmDialogProps = DialogBaseProps & {
  title: string;
  description: string;
  confirmText: string;
  onConfirm: () => void;
  cancelText: string;
  onCancel: () => void;
};

export const ConfirmDialog = ({
  isOpen,
  onClose,
  title,
  description,
  confirmText,
  onConfirm,
  cancelText,
  onCancel,
}: ConfirmDialogProps) => {
  const theme = useTheme();

  return (
    <CustomDialog isOpen={isOpen} onClose={onClose}>
      <CustomDialog.Header>{title}</CustomDialog.Header>
      <CustomDialog.Body>{description}</CustomDialog.Body>
      <CustomDialog.Footer>
        <Button
          color={theme.colors.mono.black}
          backgroundColor={theme.colors.mono.white}
          onClick={onCancel}
        >
          {cancelText}
        </Button>
        <Button
          backgroundColor={theme.colors.semantic.error}
          onClick={onConfirm}
        >
          {confirmText}
        </Button>
      </CustomDialog.Footer>
    </CustomDialog>
  );
};
