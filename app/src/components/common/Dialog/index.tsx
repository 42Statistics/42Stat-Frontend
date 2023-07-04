import { ModalType } from '@/types/Modal';
import styled from '@emotion/styled';
import { Center } from '../Center';
import { Modal, Overlay } from '../Modal';

type DialogProps = ModalType & {
  onClose: () => void;
} & React.PropsWithChildren;

export const Dialog = ({ isOpen, onClose, children }: DialogProps) => {
  return (
    <Modal isOpen={isOpen}>
      <Overlay onClick={onClose}>
        <Center>
          <Layout onClick={(e) => e.stopPropagation()}>{children}</Layout>
        </Center>
      </Overlay>
    </Modal>
  );
};

const Layout = styled.div`
  padding: 4rem;
  border-radius: ${({ theme }) => theme.radius.md};
  background-color: ${({ theme }) => theme.colors.mono.white};
`;
