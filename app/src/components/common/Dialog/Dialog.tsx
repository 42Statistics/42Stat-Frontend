import type { DialogBaseProps } from '@/types/Modal';
import { PropsWithReactElementChildren } from '@/types/PropsWithChildren';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { fadeIn } from '@styles/custom/fadeIn';
import { Modal, Overlay } from '../Modal';

export type DialogProps = PropsWithReactElementChildren<DialogBaseProps>;

export const Dialog = ({ isOpen, onClose, children }: DialogProps) => {
  return (
    <Modal isOpen={isOpen}>
      <Overlay onClick={onClose} />
      <Layout onClick={(e) => e.stopPropagation()}>{children}</Layout>
    </Modal>
  );
};

const slideDownCenterFixed = keyframes`
  0% {
    transform: translate(-50%, calc(-50% - 30px));
  }
  
  100% {
    transform: translate(-50%, -50%);
  }
`;

const Layout = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
  border-radius: ${({ theme }) => theme.radius.sm};
  background-color: ${({ theme }) => theme.colors.mono.white};
  z-index: ${({ theme }) => theme.zIndex.modal};
  animation-name: ${fadeIn}, ${slideDownCenterFixed};
  animation-duration: 0.3s, 0.3s;
`;
