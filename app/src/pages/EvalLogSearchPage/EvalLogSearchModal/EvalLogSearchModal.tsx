import { useDisclosure } from '@/hooks/useDisclosure';
import type { EvalLogSearchModel } from '@/types/EvalLogSearchModel';
import { Modal } from '@components/common';
import { EvalLogSearchAbsoluteButton } from './EvalLogSearchAbsoluteButton';
import { EvalLogSearchForm } from './EvalLogSearchForm';

export type EvalLogSearchModalProps = {
  form: EvalLogSearchModel;
  onSubmit: (data: EvalLogSearchModel) => void;
};

export const EvalLogSearchModal = ({
  form,
  onSubmit,
}: EvalLogSearchModalProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onSubmitWrapper = (form: EvalLogSearchModel) => {
    onSubmit(form);
    onClose();
  };

  return (
    <>
      <EvalLogSearchAbsoluteButton onClick={onOpen} />
      <Modal isOpen={isOpen} onClose={onClose}>
        <EvalLogSearchForm form={form} onSubmit={onSubmitWrapper} />
      </Modal>
    </>
  );
};
