import { useDisclosure } from '@/hooks/useDisclosure';
import type { EvalLogSearchModel } from '@/types/EvalLogSearchModel';
import { Dialog } from '@components/common/Dialog';
import { EvalLogSearchAbsoluteButton } from './EvalLogSearchAbsoluteButton';
import { EvalLogSearchDialogView } from './EvalLogSearchDialogView';

export type EvalLogSearchDialogProps = {
  form: EvalLogSearchModel;
  onSubmit: (data: EvalLogSearchModel) => void;
};

export const EvalLogSearchDialog = ({
  form,
  onSubmit,
}: EvalLogSearchDialogProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onSubmitWrapper = (form: EvalLogSearchModel) => {
    onSubmit(form);
    onClose();
  };

  return (
    <>
      <EvalLogSearchAbsoluteButton onClick={onOpen} />
      <Dialog isOpen={isOpen} onClose={onClose}>
        <EvalLogSearchDialogView form={form} onSubmit={onSubmitWrapper} />
      </Dialog>
    </>
  );
};
