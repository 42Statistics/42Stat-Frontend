import { ModalType } from '@/types/Modal';
import styled from '@emotion/styled';
import { Modal, Overlay } from '../Modal';

type Anchor = 'left' | 'right' | 'top' | 'bottom';

type DrawerProps = ModalType & {
  onClose: () => void;
  anchor: Anchor;
} & React.PropsWithChildren;

export const Drawer = ({ anchor, isOpen, onClose, children }: DrawerProps) => {
  return (
    <Modal isOpen={isOpen}>
      <Overlay onClick={onClose} />
      <Layout
        isOpen={isOpen}
        anchor={anchor}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </Layout>
    </Modal>
  );
};

type LayoutProps = {
  anchor: Anchor;
  isOpen: boolean;
};

const Layout = styled.div<LayoutProps>`
  position: fixed;
  top: ${({ anchor }) => anchor !== 'bottom' && 0};
  right: ${({ anchor }) => anchor !== 'left' && 0};
  bottom: ${({ anchor }) => anchor !== 'bottom' && 0};
  left: ${({ anchor }) => anchor !== 'right' && 0};
  transform: ${({ isOpen, anchor }) =>
    !isOpen &&
    ((anchor === 'left' && 'translateX(-100%)') ||
      (anchor === 'right' && 'translateX(100%)') ||
      (anchor === 'top' && 'translateY(-100%)') ||
      (anchor === 'bottom' && 'translateY(100%)'))};
  transition: all 0.4s;
  z-index: ${({ theme }) => theme.zIndex.modal};
`;
