import { ModalType } from '@/types/Modal';
import { Modal } from '@components/common';
import { SearchModalView } from './SearchModalView';

type SearchModalProps = ModalType & {
  onClose: () => void;
};

export const SearchModal = ({ isOpen, onClose }: SearchModalProps) => {
  return (
    <Modal isOpen={isOpen}>
      <SearchModalView onClose={onClose} />
    </Modal>
  );
};
