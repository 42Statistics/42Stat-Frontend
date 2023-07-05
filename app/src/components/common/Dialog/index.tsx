import { ModalType } from '@/types/Modal';
import styled from '@emotion/styled';
import { Modal, Overlay } from '../Modal';

type DialogProps = ModalType & {
  onClose: () => void;
} & React.PropsWithChildren;

export const Dialog = ({ isOpen, onClose, children }: DialogProps) => {
  return (
    <Modal isOpen={isOpen}>
      <Overlay onClick={onClose} />
      <Layout onClick={(e) => e.stopPropagation()}>{children}</Layout>
    </Modal>
  );
};

const Layout = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 4rem;
  border-radius: ${({ theme }) => theme.radius.md};
  background-color: ${({ theme }) => theme.colors.mono.white};
  z-index: ${({ theme }) => theme.zIndex.modal};
`;
